// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
    paths: {
        jquery: 'vendor/zepto',
        underscore: 'vendor/lodash',
        backbone: 'vendor/backbone',
        ratchet: 'vendor/ratchet',
        pixi: 'vendor/pixi',
        rng: 'vendor/rng'
    },
    shim: {
        // Libraries
        jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_'
        },
        rng: {
            exports: 'RNG'
        },
        backbone: {
            exports: 'Backbone',
            deps: ['jquery', 'underscore']
        },

        /*
         * Our app requires Backbone
         * (which in turn requires LoDash and jQuery)
         */
        app: {
            deps: ['backbone','ratchet']
        }
    }

});

require([

    // Load our app module and pass it to our definition function
    'app',
    'jquery',
    'pixi',
    'rng'
], function (App, $, PIXI, RNG) {
    // The "app" dependency is passed in as "App"
    window.app = new App();
    app.initialize();
    window.addEventListener('DOMContentLoaded',function(event){
        console.log(event.name);
    });
});