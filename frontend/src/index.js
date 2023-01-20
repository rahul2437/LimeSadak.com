import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./redux/store";
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from "react-redux";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    
  <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ChakraProvider>
);

