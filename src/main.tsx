import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RouterProvider } from './utils/router'
import { ThemeProvider } from './utils/theme'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider>
        <App />
      </RouterProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
