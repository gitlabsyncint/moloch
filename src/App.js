import React, { Component } from 'react'

// routing
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';

// theming
import { Grid } from 'semantic-ui-react'

// layouts
import HomeContainer from './layouts/home/HomeContainer'
import MainMenuContainer from './layouts/mainMenu/MainMenuContainer'
import MemberCardContainer from './layouts/member/MemberCardContainer'
import RaidsContainer from './layouts/raids/RaidsContainer'
import MemberGrid from './layouts/member/MemberGrid';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <MainMenuContainer />
          
          <Switch>
              <Route path='/' exact component={HomeContainer} />
              <Route path='/guild' component={MemberGrid} />
              <Route path='/raids' component={RaidsContainer} />
          </Switch>
          
        </div>
      </Router>
    );
  }
}

export default App
