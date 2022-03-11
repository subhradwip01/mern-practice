import React,{useState,useEffect} from 'react'
import { Navbar , Home , Contact, About, Signup , Login,Error } from './components'
import { Redirect, Route,Switch } from 'react-router-dom'
import "./App.css"

const App = () => {
  return (
    <>
    
    <Navbar/>
    <Switch>
      <Route exact path="/">
        <Home setTokenHan/>
      </Route>
      <Route exact path="/contact">
        <Contact/>
      </Route>
  
  
      <Route exact path="/login">
        <Login/>
      </Route>
      
      <Route exact path="/signup">
        <Signup/>
      </Route>
      <Route path="*">
        <Error/>
      </Route>
    </Switch>
    </>
  )
}

export default App