import React from 'react';
import { Route, IndexRoute } from 'react-router';

import HomeScreen from '../containers/HomeScreen';
import GameScreen from '../containers/GameScreen';
import ArchiveScreen from '../containers/ArchiveScreen';
import OptionsScreen from '../containers/OptionsScreen';
import CreditsScreen from '../containers/CreditsScreen';
import SeedDetailsScreen from '../containers/SeedDetailsScreen'

import App from '../App';

const Routes = (
    <Route path='/' component={App}>
        <IndexRoute component={HomeScreen}/>
        <Route path="/seed/:seed" handler={SeedDetailsScreen}/>
        <Route path="/game/:seed" component={GameScreen}/>
        <Route path="archive" component={ArchiveScreen}/>
        <Route path="options" component={OptionsScreen}/>
        <Route path="credits" component={CreditsScreen}/>
    </Route>
);

export default Routes;
