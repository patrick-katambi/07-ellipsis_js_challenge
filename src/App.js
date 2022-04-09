import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import NavigationBar from './components/NavigationBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/index'
import Series from './pages/series/index'
import Movies from './pages/movies/index'

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="series" element={<Series />} />
        <Route path="movies" element={<Movies />} />
        <Route path="*" element={<p>404 error</p>} />
      </Routes>
    </div>
  );
}

export default App;
