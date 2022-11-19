
import './App.css';
import React , {useState} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/User';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/pages/Login';
import Database from './components/pages/Database';
function App() {
 
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/users/add" element={<AddUser />} />
          <Route exact path="/users/edit/:id" element={<EditUser />} />
          <Route exact path="/users/User/:id" element={<User />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/database" element={<Database />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
