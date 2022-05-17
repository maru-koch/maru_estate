
import './App.css';
import Home from '../src/containers/Home'
import About from '../src/containers/About'
import Contact from '../src/containers/Contact'
import ListingDetail from '../src/containers/ListingDetail'
import Listing from '../src/containers/Listings'
import Signup from '../src/containers/Signup'
import Login from '../src/containers/Login'
import Layout from './layout/Layout'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
      <Layout>
          <Router>
              <Routes>
                  <Route path ="/" element = {<Home/>}/>
                  <Route path ="/about" element = {<About/>}/>
                  <Route path ="/contact" element = {<Contact/>}/>
                  <Route path ="/listing" element = {<Listing/>}/>
                  <Route path ="/listing-detail" element = {<ListingDetail/>}/>
                  <Route path ="signup" element = {<Signup/>}/>
                  <Route path ="/Login" element = {<Login/>}/>
              </Routes>
          </Router>
      </Layout>
  );
}

export default App;
