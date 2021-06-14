import React, { component } from "react";
import { BrowserRouter as Router, Switch, Link, Route, useParams} from "react-router-dom";

const Routers = () => {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/users/:id" component={Users} />
          <Route component={() => <h1>404 Page Not Found</h1>} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routers;



const Home = () => {
    return (
      <div>
        <h1>Home Page</h1>
      </div>
    );
  };
  
  const About = () => {
    return (
      <div>
        <h1>About Page</h1>
      </div>
    );
  };
  
  const Contact = () => {
    return (
      <div>
        <h1>Contact Page</h1>
      </div>
    );
  };
  
  const Users = () => {
      const {id} =     s(); 
      return (
        <div>
          <h1>User: {id}</h1>
        </div>
      );
    };
    
    class Users extends React.Component {
        constructor(props) {
            super(props);
            this.state = {  }
        }
        render() { 
            const { id } = this.props.match.params
            console.log(this.props.match.params)
            return ( <div>
                <h1>Users : {id} </h1>
            </div> );
        }
    }
     