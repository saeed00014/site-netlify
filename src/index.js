import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App.js";
import './index.css'
import { CardsContextProvider } from './context/CardsContext.js';
import { disableReactDevTools } from '@fvilers/disable-react-devtools'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CardsContextProvider>
      <App />
    </CardsContextProvider>
  </React.StrictMode>,
)
