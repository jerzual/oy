
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Handlebars from 'handlebars';
import Archive from 'collections/Archive';
import archiveTemplate from 'text!../templates/archive.hbs';


var ArchiveView = Backbone.View.extend({
    template: Handlebars.compile(archiveTemplate),

    tagName: 'div',

    id: '',

    className: '',

    events: {},

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
    }
});

export default ArchiveView;
