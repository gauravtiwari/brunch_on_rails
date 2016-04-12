exports.config = {
  // See http://brunch.io/#documentation for docs.
  files: {
    javascripts: {
      joinTo: "javascripts/app.js"
    },
  },

  conventions: {
    // This option sets where we should place non-css and non-js assets in.
    // By default, we set this to "/web/static/assets". Files in this directory
    // will be copied to `paths.public`, which is "priv/static" by default.
    assets: /^(app\/assets\/images)/
  },

  // Phoenix paths configuration
  paths: {
    // Dependencies and current project directories to watch
    watched: [
      "app/assets/javascripts/react",
    ],

    // Where to compile files to
    public: "app/assets"
  },

  // Configure your plugins
  plugins: {
    babel: {
      // Do not use ES6 compiler in vendor code
      ignore: [/web\/static\/vendor/],
      pattern: /\.(es6|jsx|js)$/
    }
  },

  modules: {
    autoRequire: {
      "js/app.js": ["app/assets/javascripts/components"]
    }
  },

  npm: {
    globals: {
      $: 'jquery'
    }
  }
};
