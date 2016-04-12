
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Handlebars from 'handlebars';
import menuTemplate from 'text!../templates/menu.hbs';


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

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
    }
});

export default MenuView;
