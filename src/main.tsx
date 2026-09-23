import React from 'react'
import ReactDOM from 'react-dom/client'
import { install } from '@twind/core'
import twindConfig from './twind.config'
import './styles.css'
import App from './App'

install(twindConfig)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
