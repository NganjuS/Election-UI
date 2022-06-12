import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {  Container, Row, Col, Nav, Navbar, ProgressBar, Table, Image } from 'react-bootstrap';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import registerServiceWorker from './registerServiceWorker';
//import ThemeSwitcher from './ThemeSwitcher';  
import Governors from './components/Governors'
import Presidential from './components/Presidential'
import Login from './components/Login'
import Layout from './components/Layout'
import BackendDashboard from './components/BackendDashboard';
import SelectionModal from './components/SelectionModal';
//ReactDOM.render(<ThemeSwitcher />, document.getElementById('root'));  
export default function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
          
          <Routes>
            <Route path="/" element={<Presidential />} />
              
            <Route path="governors" element={<Governors />} />
            <Route path="login" element={<Login />} />
            <Route path="backend" element={<BackendDashboard />} />
            <Route path="senator" element={<SelectionModal />} />
          </Routes>
      <Layout />
      </div>
    </BrowserRouter>
   
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App/>);
//registerServiceWorker();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
