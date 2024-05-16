import React from 'react';
import './CharacterCard.css';

const CharacterCard = ({ character }) => {
    return (
        <div className="character-card">
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Origin: {character.origin.name}</p>
        </div>
    );
};

export default CharacterCard;
