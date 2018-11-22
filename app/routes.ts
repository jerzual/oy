import m from 'mithril';

import HomeScreen from './containers/screens/HomeScreen';
import GameScreen from './containers/screens/GameScreen';
import ArchiveScreen from './containers/screens/ArchiveScreen';
import OptionsScreen from './containers/screens/OptionsScreen';
import CreditsScreen from './containers/screens/CreditsScreen';
import SeedDetailsScreen from './containers/screens/SeedDetailsScreen';

const Routes = {
  '/': HomeScreen,
  '/seed/:seed': SeedDetailsScreen,
  '/game/:seed': GameScreen,
  '/archive': ArchiveScreen,
  '/options': OptionsScreen,
  '/credits': CreditsScreen,
};
// Set up routing by connecting components to routes
m.route(document.body, '/', Routes);

export default Routes;
