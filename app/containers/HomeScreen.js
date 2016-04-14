import React from 'react';

class HomeScreen extends React.Component{
  componentDidMount(){

  }
  render(){
    return (<ul id="menu">
        <li>
            <a href="#game" className="btn btn-block" title="Generate a new game with a random seed">New Game</a>
        </li>
        <li>
            <a href="#seed" className="btn btn-block">Enter Seed</a>
        </li>
        <li>
            <a href="#archive" className="btn btn-block">Archive</a>
        </li>
        <li>
            <a href="#exit" className="btn btn-block">Exit</a>
        </li>

    </ul>);
  }
  onOptionsHandler(){

  }
  onSeedRegenerate(){

  }
  onPlay(){

  }
}

export default HomeScreen;
