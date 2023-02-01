import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Toaster } from 'react-hot-toast'
import Nav from './components/Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <Router >
      <Nav />
      <Toaster   position="top-center"
  reverseOrder={false}/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route  path="/login" component={Login} />
      <Route  path="/register" component={Register}/>
      </Switch>
      </Router>
  );
}

export default App;
