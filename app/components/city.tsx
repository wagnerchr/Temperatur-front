import React from 'react';

interface CityProps {
  city: {
    name: string;
    description: string;
    temperature: number;
  };
}

export const City: React.FC<CityProps> = ({ city }) => {
    return (
        <div className="city-card">
            <h2>{city.name}</h2>
            <p>{city.description}</p>
            <p>Temperature: {city.temperature}</p>
        </div>
    );
}