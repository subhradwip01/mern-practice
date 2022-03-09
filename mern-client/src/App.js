import React from 'react'
import { Navbar , Home , Contact, About, Signup , Login, } from './components'
import { Route,Switch } from 'react-router-dom'

const App = () => {
  return (
    <>
    
    <Navbar/>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/contact">
        <Contact/>
      </Route>
      <Route exact path="/about">
        <About/>
      </Route>
      <Route exact path="/login">
        <Login/>
      </Route>
      <Route exact path="/signup">
        <Signup/>
      </Route>
    </Switch>
    </>
  )
}

export default App