import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configStore from './redux/Store'

import 'bootstrap/dist/css/bootstrap.min.css'

import './css/style.css'

import App from './App'
import * as serviceWorker from './serviceWorker'

const store = configStore()

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
serviceWorker.unregister()