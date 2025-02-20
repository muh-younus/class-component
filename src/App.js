import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";



export default class App extends Component {
  render() {
    return (
      <>
        <div>

          <Router>

            <Navbar />
            <News pagesize={6} country="us" category="science" />

            <Routes>
              <Route exact path="/" element={< News pagesize={6} country="us" category="general" />} />
              <Route exact  path="/business" element={<News key="business" pagesize={6} country="us" category="bussiness" />} />
              <Route exact path="/science" element={<News key="science" pagesize={6} country="us" category="science" />} />
              <Route exact path="/general" element={<News key="general" pagesize={6} country="us" category="general" />} />
              <Route exact path="/sports" element={<News key="sports" pagesize={6} country="us" category="sports" />} />
              <Route exact path="/general" element={<News key="general" pagesize={6} country="us" category="general" />} />
              <Route exact path="/entertainment" element={<News key="entertainment" pagesize={6} country="us" category="entertainment" />} />



            </Routes>

          </Router>

        </div>
      </>
    )
  }
}



