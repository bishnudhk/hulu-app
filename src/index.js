import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* // we are going to install axios to make our api calls 
    // installing react router dom for our routin 
    // npm install firebase
    for to hide scrollbar npm install tailwind-scrollbar-hide.  */}

    
    <App />
  </BrowserRouter>
);


