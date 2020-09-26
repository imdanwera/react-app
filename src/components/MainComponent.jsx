import React, { Component } from 'react';
import ItemBox from './itembox/ItemBox';

class MainComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name : 'Dan'
        }
    }

    changeName = () => {

        
        this.setState(
            {
                name : "Wera"
            }
        ) 
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Hello React World</h1>
                </div>
                <div>
                    <h3>{this.state.name} Here....</h3>
                </div>
                <button onClick={this.changeName}>Click Me</button>                
            </div>
        );
    }
}

export default MainComponent;
