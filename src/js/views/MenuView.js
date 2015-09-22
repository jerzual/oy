/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/menu.hbs'
], function ($, _, Backbone, menuTemplate) {
    'use strict';

    var MenuView = Backbone.View.extend({
        template: menuTemplate,

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