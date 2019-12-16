import del from 'del';
import { src, dest, series, parallel } from 'gulp';
import plumber from 'gulp-plumber';
import eslint from 'gulp-eslint';
import browserify from 'browserify';
import babelify from 'babelify';
import envify from 'envify/custom';
import source from 'vinyl-source-stream';
import gulpIf from 'gulp-if';
import buffer from 'vinyl-buffer';
import terser from 'gulp-terser';

import { folders, files, currentEnv, PROD_ENV } from './config';

/**
 * @desc  Removes all already-existing JS files
 */
export const cleanScripts = async () => {
  await del(folders.build + files.bundle);
};

/**
 * @desc    Check syntax for JS files
 * @return  {*}
 */
export const esLint = () => {
  return src(folders.sources + files.scripts)
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format());
};

/**
 * @desc    Process JS files
 *          - Browserify : bundling
 *          - Babelify : transform ES6 code into vanilla JS
 *          - Envify : replace process.env.NODE_ENV by the defined value
 * @return  {*}
 */
export const scripts = () => {
  // debug : flag to auto-generate and append sourcemap to the generated bundle
  // entries : main JSX file
  // extensions : file extensions to scan for bundling
  const browserifyOptions = {
    debug : true,
    entries : folders.sources + files.entry_point,
    extensions : [ '.jsx' ]
  };

  return browserify(browserifyOptions)
    .transform(babelify)
    .transform(envify(currentEnv))
    .bundle()
    .pipe(source(files.bundle))
    .pipe(gulpIf(currentEnv.NODE_ENV === PROD_ENV, buffer()))
    .pipe(gulpIf(currentEnv.NODE_ENV === PROD_ENV, terser()))
    .pipe(dest(folders.build));
};

/**
 * @desc  Main JS /CSS task
 */
export const bundleScripts = series(
  parallel(cleanScripts, esLint),
  scripts
);
