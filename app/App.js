//import alt from './Alt'
import React, {PropTypes} from 'react'
import { Link } from 'react-router'
import HomeScreen from './containers/HomeScreen'
//import SeedGenerator from './generator/SeedGenerator'

class App extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
              <header className="bar bar-nav">
  <h1 className="title">OY</h1>
</header>

                <ul className="navigation">
                    <li className="navigation-item"><Link to='/'>Home</Link></li>
                    <li className="navigation-item"><Link to='/archive'>Archive</Link></li>
                    <li className="navigation-item"><Link to='/options'>Options</Link></li>
                    <li className="navigation-item"><Link to='/credits'>Credits</Link></li>
                </ul>
                {this.props.children || <HomeScreen/>}
            </div>
        );
    }

}
App.contextTypes = {
    router: React.PropTypes.object.isRequired
}
App.propTypes = {
    currentSeed: PropTypes.string,
    children: PropTypes.object
    /*
    params: PropTypes.object.isRequired,
        query: PropTypes.object.isRequired
   */
};
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
