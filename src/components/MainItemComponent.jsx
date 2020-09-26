import React, { Component } from 'react';
import ItemBox from './itembox/ItemBox';


class MainItemComponent extends Component {
    render() {
        return (
            <div style={{display:'flex'}}>
                <ItemBox color="Lightblue"/>
                <ItemBox color="Red"/>
                <ItemBox color="LightGreen"/>
                <ItemBox color="Yellow"/>
                <ItemBox color="Orange"/>
                <ItemBox color="Blue"/>
            </div>
        );
    }
}

export default MainItemComponent;
