import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import BookAppointment from './component/BookAppointment';
import ThankYouPage from './component/ThankYouPage';
import Footer from './component/Footer';
import TopBar from './component/TopBar';
import UnderDev from './component/UnderDev';
import Carousel from './component/Carousel';
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
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
          <Route exact path="/request_sent" render={() => <ThankYouPage />}></Route>
          <Route exact path="/page_under_construction" render={() => <UnderDev />}></Route>
          <Route exact path="/about" render={() => <About />}></Route>
          <Route exact path="/ancilliaries" render={() => <UnderDev />}></Route>
          <Route exact path="/department_and_units" render={() => <UnderDev />}></Route>
          <Route exact path="/find_a_doctor" render={() => <UnderDev />}></Route>
          <Route exact path="/admission" render={() => <UnderDev />}></Route>
          <Route exact path="/philhealth_requirements" render={() => <UnderDev />}></Route>
          <Route exact path="/rooms" render={() => <UnderDev />}></Route>
          <Route exact path="/health_maintenance_organizations" render={() => <UnderDev />}></Route>
          <Route exact path="/careers" render={() => <UnderDev />}></Route>
          <Route exact path="/latest_events" render={() => <UnderDev />}></Route>
          <Route path="/contact" render={() => <Contact />}></Route>
          <Route exact path="/home" render={props => (
            <div>
              <Carousel />
            </div>
          )}></Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter >
  );
}

export default App;
