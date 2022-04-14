import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import {LoginProvider} from './context/LoginContext'
import Home from './components/Home'
import About from './components/About'
import Layout from './components/Layout'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Nav_Hompage from './components/NavLoggedIn'


function App() {

  

  return (
    <Router>
      <LoginProvider>
        <Layout>
          <Switch >
            <Route path="/" exact component={Home}/>
            <Route path ="/about" component={About}/>
            <Route path ="/login" component={Login}/>
            <Route path ="/dashboard" component={Dashboard}/>
          </Switch>
        </Layout>
      </LoginProvider>
    </Router>

  );
}

export default App;


// Continue with storing cookie