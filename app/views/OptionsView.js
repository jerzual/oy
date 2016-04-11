/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'text!../templates/options.hbs'
], function ($, _, Backbone, Handlebars, optionsTemplate) {
    'use strict';

    var OptionsView = Backbone.View.extend({
        template: Handlebars.compile(optionsTemplate),

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });

    return OptionsView;
});
