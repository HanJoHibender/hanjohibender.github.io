import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import ErrorPage from './pages/ErrorPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#008288',
      light: '#4db3b7',
      dark: '#005b62',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffae00',
      light: '#ffce66',
      dark: '#cc8b00',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#1e293b',
      secondary: '#64748b',
    },
    divider: '#e2e8f0',
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 800, color: '#1e293b' },
    h2: { fontWeight: 800, color: '#1e293b' },
    h3: { fontWeight: 700, color: '#1e293b' },
    h4: { fontWeight: 600, color: '#1e293b' },
    h5: { fontWeight: 600, color: '#64748b' },
    body1: { fontSize: '1rem', lineHeight: 1.7 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          padding: '8px 24px',
          boxShadow: 'none',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.1)',
          border: '1px solid #f1f5f9',
        },
      },
    },
  },
});

const router = createHashRouter(
  [{
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'home',
        element: <Navigate to="/" replace />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ]
  }]
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
