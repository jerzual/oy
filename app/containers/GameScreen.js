import React from 'react';
import HeroStatus from '../components/HeroStatus'
class GameScreen extends React.Component {
    componentWillMount() {
        this.getDOMNode();
    }

    render() {
        return (<div>
            <HeroStatus/>
            <canvas id="game"/>
        </div>);
    }
}

export default GameScreen;
