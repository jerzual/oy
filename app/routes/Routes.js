import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../App';

var HomeScreen = require('../containers/HomeScreen');
var GameScreen = require('../containers/GameScreen');
var ArchiveScreen = require('../containers/ArchiveScreen');
var OptionsScreen = require('../containers/OptionsScreen');
var CreditsScreen = require('../containers/CreditsScreen');

const Routes = (
    <Route path='/' component={App}>
        <IndexRoute component={HomeScreen} />
        {/*<Route name="seedDetailPage" path="/seed/:seed" handler={SeedDetailsPage} />*/}
        <Route path="game/:seed" component={GameScreen} />
        <Route path="archive" component={ArchiveScreen} />
        <Route path="options" component={OptionsScreen} />
        <Route path="credits" component={CreditsScreen} />
    </Route>
);

export default Routes;
