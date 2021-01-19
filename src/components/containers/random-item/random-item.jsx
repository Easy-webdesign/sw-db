import React, { Component } from 'react';
import { SwapiService } from '../../../services/sw';
import { ErrorIndicator } from '../../hoc';
import { Spinner } from '../../UI';
import './index.scss';
import ItemTemplate from './template';

class RandomItem extends Component {

    sw = new SwapiService();

    state = {
        item: null, 
        loading: true,
        error: false
    }
    
    componentDidMount(){
        this.updatePlanet();
        setInterval(this.updatePlanet, 3000);
    }

    onError = err => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet = () => {
        const {getPlanet} = this.sw;
        const id = Math.floor(Math.random() * 25) + 2;

        getPlanet(id)
            .then(item => this.setState({item, loading: false}))
            .catch(this.onError)
    }

render() {
    const {loading, error, item} = this.state;

    const template = loading ? <Spinner/> 
                        : error ? <ErrorIndicator/> 
                        : <ItemTemplate {...item}/>;

    return (
        <div className="random-planet jumbotron rounded">
            {template}
        </div>

        );
    }
}



export default RandomItem;