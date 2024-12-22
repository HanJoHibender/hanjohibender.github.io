import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';

const router = createBrowserRouter(
  [{
    path: '/',
    element: <App />,
    children: [
      {path: '',
      element: <Home />,
    loader: () => import('./pages/Home/Home')},
      {path: 'about',
      element: <About />,
    loader: () => import('./pages/About/About')},
      {path: 'services',
      element: <Services />,
    loader: () => import('./pages/Services/Services')},
      {path: 'contact',
      element: <Contact />,
    loader: () => import('./pages/Contact/Contact')},
    ]
  }]
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
