export const folders = {
  sources : './src',
  build : './dist',
};

export const files = {
  bundle : 'bundle.js',
  entry_point : '/main.jsx',
  html : '/index.html',
  scripts : '/**/*.jsx',
};

export const PROD_ENV = 'production';

export const currentEnv = {
  global : true,
  NODE_ENV : process.env.NODE_ENV
};

