import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import Home from "./paginas/Home";
import Favourites from "./paginas/Favourites";
import { store } from "./store";
import Header from "./componentes/layout/Header";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="favoritos" element={<Favourites />} />
          
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
