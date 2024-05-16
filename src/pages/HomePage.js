import React, { useState, useEffect } from 'react';
import { getCharacters } from '../services/api';
import CharacterCard from '../component/CharacterCard';
import SearchBar from '../component/SearchBar';
import './HomePage.css';

const HomePage = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchCharacters = (query = '') => {
        setLoading(true);
        getCharacters(query)
            .then(response => {
                setCharacters(response.data.results);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching characters:', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchCharacters();
    }, []);

    return (
        <div className="home-page">
            <SearchBar onSearch={fetchCharacters} />
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="character-list">
                    {characters.map(character => (
                        <CharacterCard key={character.id} character={character} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default HomePage;
