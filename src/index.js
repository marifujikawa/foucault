import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,  Route } from "react-router-dom";
import Books from "./routes/books";
import Authorslife from "./routes/authorslife";
import Javascript from "./routes/javascript";

ReactDOM.render(
  <BrowserRouter>
     <Routes>
      <Route path="/" element={<App />} />
      <Route path="books" element={<Books />} />
      <Route path="authorslife" element={<Authorslife />} />
      <Route path="javascript" element={<Javascript />} />

    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
