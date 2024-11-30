/* eslint-disable no-unused-vars */

import React from "react";

const ComponenteConEfectos = () => {
    const [estadoAsincrono, setEstadoAsincrono] = React.useState("");

    const [pokemones, setPokemones] = React.useState([]);

    const traerPokemones = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon");
            const data = await response.json();

            setPokemones(data.results);

        } catch (err) {
            console.log(err.message)
        }
    }

    React.useEffect(() => {
        traerPokemones();
    }, []);

    return(
        <div>
            <p>Valor del estado asincrono: {estadoAsincrono}</p>

            <h1>Pokemones</h1>
            {pokemones?.map((item, index) => (
                <p key={index}>{item?.name}</p>
            ))}
        </div>
    );
}

export { ComponenteConEfectos };

