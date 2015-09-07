/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/options'
], function ($, _, Backbone, template) {
    'use strict';

    var OptionsView = Backbone.View.extend({
        template: JST['app/scripts/templates/OptionsView.ejs'],

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
