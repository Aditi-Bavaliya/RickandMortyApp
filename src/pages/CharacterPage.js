import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from '../services/api';
import CharacterCard from '../component/CharacterCard';

const CharacterPage = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getCharacterById(id)
            .then(response => {
                setCharacter(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching character:', error);
                setLoading(false);
            });
    }, [id]);

    return (
        <div className="character-page">
            {loading ? (
                <p>Loading...</p>
            ) : (
                character && <CharacterCard character={character} />
            )}
        </div>
    );
};

export default CharacterPage;
