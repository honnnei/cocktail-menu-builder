import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from '../containers/Search';
import RandomDrink from '../containers/RandomDrink';
import Menus from '../containers/Menus';
import Navbar from '../components/Navbar';
const Routes = () => {
  
    return (
          <div className="Home">
            <Router>
            <Navbar />
              <Switch>
                  <Route 
                      path='/'
                      exact 
                      component={Search}
                  />
                  <Route 
                      path='/random'
                      exact 
                      component={RandomDrink}

                  />
                  <Route
                      path='/menus'
                      exact 
                      component={Menus}
                  />
               </Switch>
            </Router>
        </div>
    );
}

export default Routes;