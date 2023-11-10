import { City } from '../components/city';

export async function ListCities() {
    const api = process.env.API_URL;
    if (!api) 
        throw new Error('Erro ao encontrar a api');
    const res = await fetch( api, {next: {revalidate: 20}})
    const cities = await res.json()

    return (
        <div className="city-list">
            <h1>Cidades:</h1>
            {cities.map((city, index) => (
                <City key={index} city={city} />
            ))}
        </div>
    );
}