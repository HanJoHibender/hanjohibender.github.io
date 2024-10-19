import './App.css';
import Header from './Header/Header';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Link
} from 'react-router-dom';
import Home from './pages/Home/Home'
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';


import React, { ReactNode } from 'react';



interface AppRouterProps {

  children: ReactNode;

}



const AppRouter: React.FC<AppRouterProps> = ({ children }) => {

  return (

    <div>

      <Header />
      {/* Your routing logic here */}
<Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
      {children}

    </div>

  );

};

function App() {
  return (
    <div className="App" />
  );
}

export { AppRouter, App };
