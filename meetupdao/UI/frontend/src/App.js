import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';
import * as Home from './components/pages/Home.js'
import * as Proposals from './components/pages/Proposals.js'
import * as Members from './components/pages/Members.js'
import './App.css';

const Main = () => {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/proposals' component={Proposals}/>
          <Route path='/members' component={Members}/>
        </Switch>  
      </main>
    </Router>
  );
}

export default Main;