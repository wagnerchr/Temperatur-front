"use client";
import React, { useState, useEffect } from 'react';
import City from '../components/city';
import api from '../services/temperatureApi';

function ListCities() {
    const [cities, setCities] = useState([]);
    useEffect(() => {
        async function fetchCities() {
            try {
            const response = await api.get('/');
            setCities(response.data);
            console.log(cities)
            } catch(err) {
                console.log("Ocorreu um erro ao fazer a requizição à api " + err);
            }
        }
        fetchCities();
    }, []);

    return (
        <div className="city-list">
            <h1>Cidade</h1>
            {cities.map((city: any) => (
                <City key={city.id} city={city} />
            ))}
        </div>
    );
}

export default ListCities;