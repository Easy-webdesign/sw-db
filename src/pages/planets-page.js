import React, {Component} from 'react';
import {PlanetDetails, PlanetList, Row } from '../components';

class PlanetsPage extends Component {
    state = {
        selectedItem: 3,
    }
  
    onItemSelected = id => {
        this.setState({
            selectedItem: id
        })
    }
    render(){
        return <Row 
                    left={<PlanetList onItemSelected={this.onItemSelected}/>} 
                    right={<PlanetDetails itemId={this.state.selectedItem}/>}
                />
    };
};

export default PlanetsPage;