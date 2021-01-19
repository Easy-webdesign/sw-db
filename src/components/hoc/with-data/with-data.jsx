import React, { Component } from 'react';
import { ErrorIndicator } from '..';
import { Spinner } from '../..';


const withData = (View) => class extends Component {
    state = {
      data: null,
      loading: true,
      error: false
    }

    initialState = data => {
      this.setState({data, loading: false})
    };

    componentDidUpdate (prevProps){
      if(this.props.getData !== prevProps.getData){
        this.update();
      }
    }

    componentDidCatch = () => this.setState({error: true});

    update = () => {
      
      const {getData} = this.props;
      getData()
        .then(this.initialState);
    }

    componentDidMount(){
      this.update()
    }
  
    
    render(){
    
      const {data, loading, error} = this.state;
      if(loading) return <Spinner/>
      if(error) return <ErrorIndicator/>
  
      return <View {...this.props} data={data}/>
    }
}

export default withData;