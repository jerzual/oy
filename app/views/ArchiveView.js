
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Archive from '../collections/Archive';


var ArchiveView = Backbone.View.extend({
    template: function(data){
        return `<li id="${data.key}"></li>`;
    },

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
