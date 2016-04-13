/*global define*/

import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';


var OptionsView = Backbone.View.extend({
    template: function(data){
        return `${data}`;
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

export default OptionsView;
