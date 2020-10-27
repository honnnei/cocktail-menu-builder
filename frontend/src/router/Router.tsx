import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Search from '../containers/Search';
import RandomDrink from '../containers/RandomDrink';
import Menus from '../containers/Menus';
import Navbar from '../components/Navbar';
import DrinkInfoPage from '../containers/DrinkInfoPage';
import MenuViewPage from '../containers/MenuViewPage';
import Header from '../components/Header';
const Routes = () => {
  
    return (
          <div className="Home">
            <Router>
                
            <Navbar />
            <Header />
              <Switch>
                    <Route 
                      path='/'
                      exact 
                      component={Home}
                    />
                  <Route 
                      path='/search'
                      exact 
                      component={Search}
                  />
                  <Route
                      path='/cocktails/:drinkId'
                      exact
                      render={(props) => <DrinkInfoPage {...props} />}
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
                  <Route
                      path='/menu-view/:menuname'
                      exact 
                      render={(props) => <MenuViewPage {...props} />}
                  />
               </Switch>
            </Router>
        </div>
    );
}

export default Routes;