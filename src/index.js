import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route path='/' name='Personalize' component={App} />
    </Switch>
  </BrowserRouter>
), document.getElementById('root'))

registerServiceWorker()
