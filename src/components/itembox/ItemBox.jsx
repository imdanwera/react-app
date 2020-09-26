import React, { Component } from 'react';
import './ItemBoxStyles.css'
import logo from '../../logo.svg'

class ItemBox extends Component {
    render() {
        return (
            <div className='box' align='center' style={{backgroundColor:this.props.color}}>
                <div>
                <h2>{this.props.color}</h2>
                <p>&nbsp;</p>
                <img src={logo}/>
        
                </div>
            </div>
        );
    }
}

export default ItemBox;
