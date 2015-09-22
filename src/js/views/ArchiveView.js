/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'collections/Archive',
    'text!../templates/archive.hbs'
], function ($, _, Backbone, Handlebars, Archive, archiveTemplate) {
    'use strict';

    var ArchiveView = Backbone.View.extend({
        template: Handlebars.compile(archiveTemplate),

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
