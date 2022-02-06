import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import axios from 'axios'
import { Typography, Paper, Container, Grid } from '@mui/material';
import './App.css';
import Form from './components/Form/Form';
import ReviewPage from './pages/ReviewPage';
import DatabasePage from './pages/DatabasePage';
import Home from './pages/Home'

function App() {

  
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/database" element={<DatabasePage />} />
      </Routes>
    </BrowserRouter>
     </div>
  );
}

export default App;
