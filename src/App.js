import React from "react";
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import "flexboxgrid2/flexboxgrid2.css";
import Home from './Home/home.container';
import Rutinas from './Rutinas/rutinas.container';
import Graficos from './Graficos/graficos.container';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/rutinas" element={<Rutinas />} />
          <Route path="/graficos" element={<Graficos />} />
        </Routes>
    </div >
  );
}

export default App;
