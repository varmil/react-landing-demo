import React, { Component } from 'react'
import {Container} from 'reactstrap'
import {Link, Switch, Route, Redirect} from 'react-router-dom'

import Header from '../components/Header/'
import Footer from '../components/Footer/'
import Personalize from '../pages/Personalize/'
import Products from '../pages/Products/'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Header />
        <div className='app-body'>
          <main className='main'>
            <Container fluid className='px-0'>
              <Switch>
                <Route exact path='/' name='Personalize' component={Personalize} />
                <Route exact path='/products' name='Products' component={Products} />
                <Route path='/products/:id' name='Product Detail' component={Personalize} />
                {/* <Redirect from='/' to='/personalize' /> */}
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
