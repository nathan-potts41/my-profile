import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import './assets/materialize/css/materialize.min.css';
import Nav from './components/Nav';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
// import Footer from './components/Footer';
import Sidenav from './components/SideNav';


function App() {
  return (
    <Router>
      <div>
        <main className="row">
          <Nav />
          <Sidenav />
          <Switch>
            <Route exact path='/' component={About} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/resume' component={Resume} />
          </Switch>
          {/* <Footer /> */}
        </main>
      </div>
    </Router>
  );
}

export default App;
