import React from "react";
import { AppContext } from "../../../Context";

import "./styles.css";

const MostrarNoticias = () => {
    const { noticias } = React.useContext(AppContext);

    return (
        <div className="news-container">
            <h1>Noticias</h1>
            {noticias?.map((item, index) => (
                <div key={index} className="news-card">
                    <h2>{item.titulo}</h2>
                    <p>{item.descripcion}</p>
                    <p>{item.fecha}</p>
                </div>
            ))}
        </div>
    );
}

export { MostrarNoticias };