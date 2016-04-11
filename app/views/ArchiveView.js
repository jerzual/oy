/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/archive'
], function ($, _, Backbone, templates) {
    'use strict';

    var ArchiveView = Backbone.View.extend({
        template: JST['app/scripts/templates/GameListView.ejs'],

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

    return ArchiveView;
});
