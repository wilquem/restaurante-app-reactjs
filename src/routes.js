import React from 'react';
import Menu from 'components/Menu';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaPadrao from 'components/PaginaPadrao';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<PaginaPadrao/>}>
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}
