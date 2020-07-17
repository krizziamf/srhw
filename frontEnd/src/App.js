import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import BookAppointment from './component/BookAppointment';
import Footer from './component/Footer';
import TopBar from './component/TopBar';
import Privacy from './component/Privacy';
import Carousel from './component/Carousel';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import Contact from './component/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopBar />
        <Header />
        <Switch>
          <Route exact path="/" render={() => <BookAppointment />}></Route>
          <Route exact path="/bookappointment" render={() => <BookAppointment />}></Route>
          {/* <Route path="/home" render={() => <Home />}></Route> */}
          <Route exact path="/home" render={props => (
            <div>
              {/* <BookAppointment /> */}
              <Home />
              <About />
              <Contact />
            </div>
          )}></Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter >
  );
}

export default App;
