import React, { Component } from 'react';
import { SwapiService } from '../../../services/sw';
import './index.scss';
import ItemTemp from './template';

export default class ItemDetails extends Component {

  state = {
    item: null,
    img: null,
    loading: true,
    error: false
  }

  sw = new SwapiService();


  initialState = (itemId) => {
    const {getData, getImageUrl} = this.props
    getData(itemId)
      .then(item => this.setState({item, img: getImageUrl(item), loading: false}));
  }

  updateItem = () => {
    const {itemId} = this.props;
    if(!itemId) return;

    this.initialState(itemId);
  }

  componentDidUpdate (prevProps){
    if(this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData || 
      this.props.getImageUrl !== prevProps.getImageUrl){
      this.updateItem();
    }
  }

  componentDidMount = () => {
    this.updateItem();
  }

  render() {

    const {item, img} = this.state;

    return <ItemTemp {...item} img={img}>
            {this.props.children}
          </ItemTemp>
  }
}
