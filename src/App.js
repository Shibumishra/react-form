import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';
import Navbar from './components/Nabbar';
import { BrowserRouter, Route, Switch, Link, useParams } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import PageNotFound from './components/PageNotFound';
import SignIn from './components/SignIn';


const  App =() =>{
  return ( <BrowserRouter>
    <Navbar />
     <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/about" component={About} />
       <Route path="/contact" component={Contact} />
       <Route path="/signin" component={SignIn} />
       <Route path="/signup" component={SignUp} />
       <Route component={PageNotFound}/>
     </Switch>
  </BrowserRouter>);
}
export default App;
