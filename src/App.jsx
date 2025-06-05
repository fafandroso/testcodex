import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import WaitingRoom from './pages/WaitingRoom';
import Game from './pages/Game';
import Results from './pages/Results';

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Inicio</Link> |{' '}
        <Link to="/waiting">Sala de Espera</Link> |{' '}
        <Link to="/game">Juego</Link> |{' '}
        <Link to="/results">Resultados</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waiting" element={<WaitingRoom />} />
        <Route path="/game" element={<Game />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </>
  );
}
