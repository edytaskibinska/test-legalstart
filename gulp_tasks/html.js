import del from 'del';
import { src, dest, series, parallel } from 'gulp';
import plumber from 'gulp-plumber';
import htmllint from 'gulp-htmllint';
import htmlmin from 'gulp-htmlmin';

import { folders, files } from './config';

/**
 * @desc  Removes all already-existing HTML files
 */
export const cleanHtml = async () => {
  await del(folders.build + files.html);
};

/**
 * @desc    Check syntax for HTML files
 * @return  {*}
 */
export const htmlLint = () => {
  // config : define the configuration file to define the linting rules
  // failOnError : stop gulp process on error
  const htmllintOptions = {
    config : '.htmllintrc',
    failOnError : true
  };

  return src(folders.sources + files.html)
    .pipe(plumber())
    .pipe(htmllint(htmllintOptions));
};

/**
 * @desc    Minify HTML files
 * @return  {*}
 */
export const minifyHtml = () => {
  // collapseWhitespace : remove whitespaces (dev indentation)
  // minifyCSS : minify inline CSS
  // minifyJS : minify inline JS
  // removeComments : remove comment, if you want to keep a comment, write a '!' at the beginning of your comment
  const htmlminOptions = {
    collapseWhitespace : true,
    minifyCSS : true,
    minifyJS : true,
    removeComments : true
  };

  return src(folders.sources + files.html)
    .pipe(plumber())
    .pipe(htmlmin(htmlminOptions))
    .pipe(dest(folders.build));
};

/**
 * @desc  Main HTML task
 */
export const bundleHtml = series(
  parallel(cleanHtml, htmlLint),
  minifyHtml
);
