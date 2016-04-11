/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'text!../templates/menu.hbs'
], function ($, _, Backbone,Handlebars, menuTemplate) {
    'use strict';

    var MenuView = Backbone.View.extend({
        template: Handlebars.compile(menuTemplate),

        tagName: 'div',

        id: '',

        className: '',

        events: {
            "click .menu-quit": "quit",
            "click .menu-new": "newGame",
            "click .menu-seed": "enterSeed",
            "click .menu-archive": "archive",
            "click .menu-options": "options"
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });

    return MenuView;
});