import React, { Component } from 'react'
import {Container} from 'reactstrap'
import {Link, Switch, Route, Redirect} from 'react-router-dom'

import Header from '../components/Header/'
import Footer from '../components/Footer/'
import Personalize from '../pages/Personalize/'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Header />
        <div className='app-body'>
          <main className='main'>
            <Container fluid>
              <Switch>
                <Route path='/personalize' name='Personalize' component={Personalize} />
                <Redirect from='/' to='/personalize' />
              </Switch>
            </Container>
          </main>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
