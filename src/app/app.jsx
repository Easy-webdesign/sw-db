import React, { Component } from 'react';
import { Header, ErrorIndicator, SwProvider, RandomItem, StarshipDetails} from '../components';
import { ErrorBoundry } from '../components/hoc';
import { LoginPage, PeoplePage, PlanetsPage, SecretPage, StarshipsPage } from '../pages';
import { SwapiService } from '../services/sw';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import './index.scss';

class App extends Component {
  
  sw = new SwapiService();

  state = {
      selectedItem: 3,
      isLoggedIn: false,
      hasError: false
  }

  onItemSelected = id => {
      this.setState({
          selectedItem: id
      })
  }

  componentDidCatch = () => {
      this.setState({hasError: true});
  }

  onLogin = ()=>{this.setState({isLoggedIn: true})}


  render(){
    if(this.state.hasError) return <ErrorIndicator/>

    return (
      <ErrorBoundry>
        <SwProvider value={this.sw}>
          <Router>
            <Header />
            <RandomItem/>
            <Switch>
              <Route path='/people/:id?' component={PeoplePage}/>
              <Route path='/planets' component={PlanetsPage}/>
              <Route path='/starships/:id' render={({match, location, history}) => {
                return <StarshipDetails itemId={match.params.id}/>
              }}/>
              <Route path='/starships/' component={StarshipsPage}/>
              <Route path='/login/' render={() => {
                return <LoginPage isLoggedIn={this.state.isLoggedIn} onLogin={this.onLogin}/>
              }}/>
              <Route path='/secret/' render={() => {
                return <SecretPage isLoggedIn={this.state.isLoggedIn}/>
              }}/>
              <Route path='/' exact render={() => <h2>Welcome to StarDB</h2>}/>

              <Route render={() => <h2>Error 404</h2>}/>

              {/* <Redirect to='/'/> */}
            </Switch>

          </Router>
          
        </SwProvider>

      </ErrorBoundry>
    );
  }
};

export default App;