import { parallel, series, src, watch } from 'gulp';
import plumber from 'gulp-plumber';
import server from 'gulp-server-livereload';
import '@babel/polyfill';

import { files, folders } from './gulp_tasks/config';
import { bundleScripts, esLint } from './gulp_tasks/scripts';
import { bundleHtml, htmlLint } from './gulp_tasks/html';

/**
 * @desc    Serve files through a livereload server
 * @return  {*}
 */
const serve = () => {
  // 'directoryListing' : disable the ability to serve files as a "remote folder"
  // 'log' : levels = ['info', 'debug']
  // 'host' and 'port' : straightforward
  const serverOptions = {
    'directoryListing' : false,
    'host' : '0.0.0.0',
    'log' : 'debug',
    'port' : 8000
  };

  return src(folders.build)
    .pipe(plumber())
    .pipe(server(serverOptions));
};

/**
 * @desc    Watch HTML files changes and process them
 * @param   {Function}    cb    Completion callback
 */
const watchHtml = (cb) => {
  watch(
    [folders.sources + files.html],
    {
      events : 'all',
      ignored: /node_modules/gmi
    },
    bundleHtml
  );
  cb();
};

/**
 * @desc    Watch JSX / CSS files changes and process them
 * @param   {Function}    cb    Completion callback
 */
const watchScripts = (cb) => {
  watch(
    [folders.sources + files.scripts],
    {
      events : 'all',
      ignored: /node_modules/gmi
    },
    bundleScripts
  );
  cb();
};

exports.lint = parallel(esLint, htmlLint);
exports.build = parallel(bundleHtml, bundleScripts);
exports.default = series(
  parallel(bundleHtml, bundleScripts),
  parallel(watchHtml, watchScripts, serve)
);
