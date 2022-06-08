import React from 'react';
import ReactDOM from 'react-dom/client'
import { AppContextProvider } from './context/AppContext';
import App from './routes/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
)