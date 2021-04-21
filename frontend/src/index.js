import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'
import './bootstrap.min.css'

/* React'in run edildigi kisim ve bizim single page application seklinde uygulamamizi
yurutmemizi saglayan kisim. Olusturdugumuz store ile butun uygulamadan global bir state
ulasmak icin olusturdugumuz store ile App componentini yani butun uygulamayi sarmaladigimiz
kisim.*/

//@desc public/index.html kismindaki <div id="root"></div> kismina butun uygulamayi render ediliyor
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
