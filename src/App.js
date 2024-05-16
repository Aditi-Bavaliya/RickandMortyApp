import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CharacterPage from './pages/CharacterPage';
import EpisodePage from './pages/EpisodePage';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <header>
                    <h1>Rick and Morty App</h1>
                </header>
                <main>
                <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route path="/character/:id" element={<CharacterPage />} />
                        <Route path="/episodes" element={<EpisodePage />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
