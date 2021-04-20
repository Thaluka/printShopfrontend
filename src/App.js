import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Header from './Components/Header';
import Home from './Pages/Home';
import Service from './Pages/Service';
import Technology from './Pages/Technology';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Router>
          <Header/>
          <main>
            <Switch>
              <Route path="/" exact>
                <Home/>
              </Route>
              <Route path="/service">
                <Service/>
              </Route>
              <Route path="/technology">
                <Technology/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/contact">
                <Contact/>
              </Route>
            </Switch>
          </main>
          <Footer/>
      </Router>
    </div>
  )
}

export default App

