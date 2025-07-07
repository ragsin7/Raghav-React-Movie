import React from 'react';
import './App.css';
import Header from './Components/Header';
import Slider from './Components/Slider';
import ProductionHouse from './Components/ProductionHouse';
import GenreMovieList from './Components/GenreMovieList';

function App() {
  return (
    <div className="app">
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </div>
  );
}

export default App;
