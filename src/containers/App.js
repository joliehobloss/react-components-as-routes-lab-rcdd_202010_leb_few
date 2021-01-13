import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
    <div>
     <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path=" /movies" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
    </div>
    </Router>
  );
};

export default App

/*    <Route exact path="/" component={Home} />
        <Route exact path="/actors" component={Actors} />
        <Route exact path="/directors" component={Directors} />
        <Route exact path="/movies" component={Movies} />*/


