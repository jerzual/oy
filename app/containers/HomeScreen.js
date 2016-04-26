import React from 'react';
import SeedInput from '../components/SeedInput'
import AvatarPreview from '../components/AvatarPreview'

class HomeScreen extends React.Component {
    componentDidMount() {

    }

    render() {
        return (<div>
            <AvatarPreview width={320} height={320} />
            <SeedInput />
        </div>);
    }

    onOptionsHandler() {

    }

    onSeedRegenerate() {

    }

    onPlay() {

    }
}

export default HomeScreen;
