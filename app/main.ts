import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { thunkMiddleware, loggerMiddleware } from 'react-thunk';
import { persistentStore } from 'redux-pouchdb';
import PouchDB from 'pouchdb';
//import PIXI from 'pixi.js';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import App from './App'
import HomeScreen from './containers/HomeScreen';
import GameScreen from './containers/GameScreen';
import ArchiveScreen from './containers/ArchiveScreen';
import OptionsScreen from './containers/OptionsScreen';
import CreditsScreen from './containers/CreditsScreen';

const db = new PouchDB('dbname');

//optional 
const applyMiddlewares = applyMiddleware(
 thunkMiddleware,
 loggerMiddleware
);

const createStoreWithMiddleware = compose(
 applyMiddlewares,
 persistentStore(db)
)(createStore);

const store = createStoreWithMiddleware(reducer, initialState);
//import Routes from './routes/Routes'
//import Matter from 'matter-js';
// The "app" dependency is passed in as "App"
window.addEventListener('DOMContentLoaded', function() {

    //console.log(event);
    ReactDOM.render(
        <Provider store={store}>
            <Router {...this.props} history={browserHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={HomeScreen}/>
                    {/*<Route name="seedDetailPage" path="/seed/:seed" handler={SeedDetailsPage} />*/}
                    <Route path="game/:seed" component={GameScreen}/>
                    <Route path="archive" component={ArchiveScreen}/>
                    <Route path="options" component={OptionsScreen}/>
                    <Route path="credits" component={CreditsScreen}/>
                </Route>
            </Router>
        </Provider>,
        document.getElementById('root')
    );
});
