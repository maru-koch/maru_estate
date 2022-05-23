
import './App.css';
import Home from '../src/containers/Home'
import About from '../src/containers/About'
import Contact from '../src/containers/Contact'
import ListingDetail from '../src/containers/ListingDetail'
import Listings from '../src/containers/Listings'
import Signup from '../src/containers/Signup'
import Login from '../src/containers/Login'
import ErrorPage from '../src/containers/errorPage'
import Dashboard from '../src/containers/dashboard'
import { useEffect, useState } from 'react';
import Layout from './layout/Layout'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {useSelector } from 'react-redux'

function App() {

    const {token} = useSelector(state => state.auth)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        if (token){
        setIsAuthenticated(true)
    }else{
        setIsAuthenticated(false)
    }
    }, [token])
    
  return (
      <Layout isAuthenticated = {isAuthenticated}>
          <Router>
              {isAuthenticated?
               <Routes>
                   <Route path ="/dashboard" element = {<Dashboard/>}/>
                   <Route path ="/listings" element = {<Listings/>}/>
                   <Route path = "/listings/:id" element = {<ListingDetail/>}/>
               </Routes>
               :
                <Routes>
                  <Route path ="/" element = {<Home/>}/>
                  <Route path ="/about" element = {<About/>}/>
                  <Route path ="/contact" element = {<Contact/>}/>
                  <Route path ="/listings" element = {<Listings/>}/>
                  <Route path = "/listings/:id" element = {<ListingDetail/>}/>
                  <Route path ="signup" element = {<Signup/>}/>
                  <Route path ="/login" element = {<Login/>}/>
                  <Route path ="*" element = {<ErrorPage/>}/>
              </Routes>
              }
          </Router>
      </Layout>
  );
}

export default App;
