import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SingleBlog from './SingleBlog'; // ✅ import SingleBlog component
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'; // ✅ import router

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
