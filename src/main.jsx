import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './output.css';
import App from './App';
import Search from './Search.jsx';
import RecipeDetail from './RecipeDetail';
import Favorites from './Favorites';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/search" element={<Search />} />
        {/*<Route path="/recipe/:id" element={<RecipeDetail />} />*/}
        <Route path="/recipe" element={<RecipeDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
);
