/*global define*/

import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Handlebars from 'handlebars';
import optionsTemplate from 'text!../templates/options.hbs';


var OptionsView = Backbone.View.extend({
    template: Handlebars.compile(optionsTemplate),

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
