import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import WorkersList from './components/WorkersList';
import HomePage from './components/HomePage';

function App() {
  return <div>
    <Routes>
      <Route index path="/" element={<HomePage />}></Route>
      <Route path="/workers" element={<WorkersList />}></Route>
    </Routes>
  </div>
}

export default App;
