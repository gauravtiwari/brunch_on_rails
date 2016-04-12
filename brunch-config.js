exports.config = {
  // We only need javascripts so just join and compile javascript bundle
  files: {
    javascripts: {
      joinTo: "components-bundle.js"
    },
  },

  conventions: {
    // This option sets where we should place non-css and non-js assets in.
    // By default, we set this to "/web/static/assets". Files in this directory
    // will be copied to `paths.public`, which is "priv/static" by default.
    assets: /^(app\/assets\/images)/
  },

  // Rails paths configuration
  paths: {
    // Dependencies and current project directories to watch
    watched: [
      "app/assets/components/src",
      "app/assets/components/utils",
      "app/assets/components",
    ],

    // Where to compile files to
    public: "app/assets/javascripts"
  },

  // Configure your plugins
  plugins: {
    babel: {
      // Do not use ES6 compiler in vendor code
      ignore: [/web\/static\/vendor/],
      pattern: /\.(es6|jsx|js)$/
    },
    autoReload: {enabled: false},
  },
  sourceMaps: false,
  modules: {
    autoRequire: {
      "components-bundle.js": [
        "assets/components/bootstrapper"
      ]
    }
  },

  npm: {
    globals: {
      $: 'jquery'
    }
  }
};
