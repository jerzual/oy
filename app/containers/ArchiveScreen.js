import React, {PropTypes} from 'react';
import connectToStores from 'alt-utils/lib/connectToStores'
import SeedStore from '../stores/SeedStore'

/**
 * Archive is a list of played games, (just their seed now)
 */
class ArchiveScreen extends React.Component {
    static getStores() {
        return [SeedStore];
    }
    static getPropsFromStores() {
        return SeedStore.getState();
    }
    render() {
        return (
            <ul className="table-view">
                {
                    this.props.seeds.map(
                        (seed) =>(
                            <li className="table-view-cell media">
                                <a className="navigate-right">
                                    <img className="media-object pull-left" src="http://placehold.it/42x42"/>
                                    <div className="media-body">
                                        {seed}
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </a>
                            </li>
                        )
                    )
                }
            </ul>
        );
    }
}

ArchiveScreen.propTypes = {
    seeds: PropTypes.array
};

export default connectToStores(ArchiveScreen);
