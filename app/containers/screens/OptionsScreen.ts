import React,{PropTypes} from 'react'
import { connectToStores } from 'redux';
import OptionsStore from '../stores/OptionsStore'

export class OptionsScreen extends React.Component {
    static getStores() {
        return [OptionsStore];
    }
    static getPropsFromStores() {
        return OptionsStore.getState();
    }
    render() {
        return (

            <ul className="table-view">
                {
                    this.props.options.map((opts)=>(
                            <li className="table-view-cell">
                                {opts.name}
                                <input type="checkbox" value={opts.enabled}/>
                            </li>
                        )
                    )
                }
            </ul>
        );
    }
}
OptionsScreen.propTypes = {
    options: PropTypes.array
}
export default connectToStores(OptionsScreen);
