import React,{PropTypes} from 'react'

class SeedInput extends React.Component{

    render(){

        return (<div>
            <input type="text"/>
            <button type="button" value="regenerate"/>
            <button type="submit" value="OK"/>
        </div>);
    }
}

SeedInput.propTypes = {
    seed:PropTypes.string,
    onRegenerate:PropTypes.func,
    onChange:PropTypes.func,
    onSubmit:PropTypes.func
};

export default SeedInput;