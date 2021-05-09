import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


import Login from './components/login';

const axios = require('axios').default;

export default function App() {
	const [isLoggedIn,setLoggedInState] = useState(true);
  return (
    <Router>
      <div>
        <nav className="navbar-expand-lg navbar navbar-dark bg-dark">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
             <Link  className="nav-link"  to="/">Home</Link>
             <Link  className="nav-link" style = {{ display: isLoggedIn?"none":null  }} to ="/slogin">Student Login</Link>
             <Link  className="nav-link" style = {{ display: isLoggedIn?"none":null  }} to ="/sregister">Student Registeration</Link>
             <Link  className="nav-link" style = {{ display: isLoggedIn?"none":null  }} to ="/tlogin">Teacher Login</Link>
             <Link  className="nav-link" style = {{ display: isLoggedIn?"none":null  }} to ="/tregister">Teacher Registeration</Link>
             <Link  className="nav-link" style = {{ display: isLoggedIn?null:"none"  }} to ="/dashboard">Dashboard</Link>
			 <Link className='nav-link' method='post' to='/logout' style = {{ display: isLoggedIn?null:"none"}}>Logout</Link>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/slogin">
            <Slogin />
          </Route>
		  <Route path="/sregister">
            <Sregister />
          </Route>
          <Route path="/tlogin">
            <Tlogin />
          </Route>
          <Route path="/tregister">
            <Tregister />
          </Route>
		  <Route path="/logout">
            <Logout isLoggedIn = {isLoggedIn} />
          </Route>
		  <Route path="/dashboard">
            <Dashboard isLoggedIn = {isLoggedIn} />
          </Route>
		  <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Welcome</h2>;
}

function Dashboard(props) {
  if (props.isLoggedIn){
		return (<h2>Dashboard</h2>);
	}else{
		return(<h2>Authorized Personel Only!</h2>)
	}
}

function Tlogin() {
  return <Login title='Teacher Login Portal'/>;
}

function Tregister() {
	return <Login title='Teacher Registeration Portal' isRegisteration="true"/>;
  }
  
  
function Slogin() {
	return <Login title='Student Login Portal'/>;
}

function Sregister() {	
	return <Login title='Student Registration Portal' isRegisteration="true"/>;
}

function handleClick(isLoggedIn){
  isLoggedIn = false;
}

function Logout(props){
	if(props.isLoggedIn){
		return <form action = '/logout' method = "post">
			<p>Click On the Button To Logout</p>
			<button  type = "submit" onClick={handleClick(props.isLoggedIn)}>Logout</button>
		 </form>;
	}
	else{
		return <p>User Not Logged in.</p>
	}	
}
