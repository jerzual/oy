import React,{ PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/Routes';
import { browserHistory, Router, Link } from 'react-router';

var App = React.createClass({

    propTypes: {
        params: PropTypes.object.isRequired,
        query: PropTypes.object.isRequired
    },
    componentWillMount(){
        this.state.currentSeed = this.props.currentSeed || SeedGenerator.randomSeed();
    },
    render: function() {
        return (
            <div>
                <h1>Beans of War</h1>
                <ul className="navigation">
                    <Link to='home'><li className="navigation-item">HOME</li></Link>
                </ul>
                <Router {...this.props} history={browserHistory}>
                    <Routes/>
                </Router>
            </div>
        );
    }
});
/*
const App = function(){return{
    // Application Constructor
    initialize: function () {
        this.bindEvents();
        //this.views = new MenuView();
        Backbone.history.start();
        window.seed = SeedGenerator.randomSeed();
        return this;
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        App.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        //console.log('Received Event: ' + id);
    }
}};
*/
export default App;
