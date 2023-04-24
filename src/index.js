import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import './index.css'
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./store/cardSlice.js";
import signinSlice from "./store/signinSlice.js";

const store = configureStore({
  reducer: {
    card: cardSlice.reducer,
    signin: signinSlice.reducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
)
