
import './App.css';
import Home from '../src/containers/Home'
import About from '../src/containers/Home'
import Contact from '../src/containers/Home'
import ListingDetail from '../src/containers/Home'
import Listing from '../src/containers/Home'
import Signup from '../src/containers/Home'
import Login from '../src/containers/Home'
import Layout from './layout/Layout'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
      <Layout>
          <Router>
              <Routes>
                  <Route path ="/" element = {<Home/>}/>
                  <Route path ="about" element = {<About/>}/>
                  <Route path ="contact" element = {<Contact/>}/>
                  <Route path ="listing" element = {<Listing/>}/>
                  <Route path ="listing-detail" element = {<ListingDetail/>}/>
                  <Route path ="Signup" element = {<Signup/>}/>
                  <Route path ="Login" element = {<Login/>}/>
              </Routes>
          </Router>
      </Layout>
  );
}

export default App;
