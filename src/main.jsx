import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
//import './molde/index.css'
import './main.css'
//import App from './molde/App.jsx'

import { AppRouter } from './general/routes/AppRouter.jsx'
import { store } from './general/store/store'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <AppRouter />
      </StrictMode>
    </BrowserRouter>
  </Provider>
)
