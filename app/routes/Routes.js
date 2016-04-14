import React from 'react';
import { Route, DefaultRoute } from 'react-router';

import App from '../App';

var HomeScreen = require('../containers/HomeScreen');
var GameScreen = require('../containers/GameScreen');
var ArchiveScreen = require('../containers/ArchiveScreen');
var OptionsScreen = require('../containers/OptionsScreen');
var CreditsScreen = require('../containers/CreditsScreen');

var routes = (
    <Route name="home" path='/' handler={App}>
        <DefaultRoute name="homeScreen" handler={HomeScreen} />
        {/*<Route name="seedDetailPage" path="/seed/:seed" handler={SeedDetailsPage} />*/}
        <Route name="gameScreen" path="/game/:seed" handler={GameScreen} />
        <Route name="archiveScreen" path="/archive" handler={ArchiveScreen} />
        <Route name="optionsScreen" path="/options" handler={OptionsScreen} />
        <Route name="creditsScreen" path="/credits" handler={CreditsScreen} />
    </Route>
);

module.exports = routes;
