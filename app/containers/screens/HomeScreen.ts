import React from 'react';
import SeedInput from '../components/SeedInput'
import AvatarPreview from '../components/AvatarPreview'

class HomeScreen extends React.Component {
    componentDidMount() {

    }

    render() {
        return (<form name='home'>
            <AvatarPreview width={320} height={320} />
            <SeedInput />
        </form>);
    }

    onOptionsHandler() {

    }

    onSeedRegenerate() {

    }

    onPlay() {

    }
}

export default HomeScreen;
