import React from "react";
import { AppContext } from "../../../Context";

import "./styles.css";

const MostrarDesdeContexto = () => {
    const { responseData } = React.useContext(AppContext);

    return(
        <div className="users-container">
            {responseData?.map((item, index) => (
                <div key={index} className="user-card">
                    <p>Nombre: {item.Nombres}</p>
                    <p>Nombre: {item.Apellidos}</p>
                    <p>Correo: {item.Correo}</p>
                    <p>Edad: {item.Edad}</p>
                    <p>Genero: {item.Genero}</p>
                </div>
            ))}
        </div>
    )
}

export { MostrarDesdeContexto };