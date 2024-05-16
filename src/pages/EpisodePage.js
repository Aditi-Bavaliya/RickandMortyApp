import React, { useState, useEffect } from 'react';
import { getEpisodes } from '../services/api';
import './EpisodePage.css';

const EpisodePage = () => {
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getEpisodes()
            .then(response => {
                setEpisodes(response.data.results);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching episodes:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="episode-page">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {episodes.map(episode => (
                        <li key={episode.id}>
                            {episode.name} (Season {episode.episode})
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default EpisodePage;
