import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {ThemeProvider} from '@material-ui/styles'

import theme from './ui/Theme'
import reducers from './reducers/index'
import './index.css';
import App from './App';
import Layout from './hoc/Layout'

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(reduxThunk))
)

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
 ,
  document.getElementById('root')
);