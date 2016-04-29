import React,{PropTypes} from 'react'

class SeedInput extends React.Component{

    render(){

        return (<div>
            <input type="text" placeholder="QWERTY42" max={8}/>
            <button type="button" className="btn  btn-bloc" value="regenerate">regenerate</button>
            <button type="submit" className="btn btn-positive btn-bloc">Play</button>
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
