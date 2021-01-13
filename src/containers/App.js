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
      <Route exact path=" /movies" component={movies} />
      <Route exact path="/directors" component={directors}/>
      <Route exact path="/actors" component={actors} />
    </div>
    </div>
    </Router>
  );
};

export default App



