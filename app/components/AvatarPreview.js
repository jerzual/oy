import React,{PropTypes} from 'react'
import {findDOMNode} from 'react-dom';
import RNG from '../generator/RandomNumberGenerator';
import AvatarPainter from '../generator/AvatarPainter';

class AvatarPreview extends React.Component{

    componentDidMount(){
        const context = findDOMNode(this).getContext('2d');
        this.paint(context);
    }
    componentDidUpdate() {
        const context = findDOMNode(this).getContext('2d');
        context.clearRect(0, 0, this.props.width, this.props.height);
        this.paint(context);
    }

    render(){
        return (<canvas width={this.props.width} height={this.props.height}/>);
    }
    paint(context){
        const rng = new RNG(this.props.seed);
        let pixels = new AvatarPainter(rng).paint(context, this.props.width, this.props.height);
        console.log(pixels);
    }
}

AvatarPreview.propTypes = {
    seed: PropTypes.string,
    width:PropTypes.number,
    height:PropTypes.number
}

export default AvatarPreview;
