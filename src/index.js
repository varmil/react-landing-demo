import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

ReactDOM.render((
  <HashRouter>
    <Switch>
      <Route path='/' name='Personalize' component={App} />
    </Switch>
  </HashRouter>
), document.getElementById('root'))

registerServiceWorker()
