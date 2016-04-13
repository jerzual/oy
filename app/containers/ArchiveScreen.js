import React, {PropTypes} from 'react';

/**
 * Archive is a list of played games, (just their seed now)
 */
class ArchiveScreen extends React.Component{
  static propTypes = {
    seeds:PropTypes.array
  }
  render(){
    return(
    <ul className="table-view">
        {
          this.state.seeds.map(
            function(seed){
              return(
        <li className="table-view-cell media">
            <a className="navigate-right">
                <img className="media-object pull-left" src="http://placehold.it/42x42"/>
                <div className="media-body">
                    {seed}
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet.</p>
                </div>
            </a>
        </li>
        );})}
    </ul>);
  }
}

export default ArchiveScreen;
