import React from "react";

const ComponenteConEstados = () => {
    // Estado de tipo booleano
    const [estado, setEstado] = React.useState(true);

    // Estado de tipo string
    const [estadoString, setEstadoString] = React.useState("String 1");

    // Estado de tipo numerico
    const [estadoNumero, setEstadoNumero] = React.useState(0);

    // Estado de tipo array
    const [estadoArray, setEstadoArray] = React.useState([1, 2, 3, 4, 5]);

    // Estado de tipo objeto
    const [estadoObjeto, setEstadoObjeto] = React.useState({
        nombre: "Pepito", 
        apellido: "Perez"
    });

    const handleCambioEstado = () => {
        // Cambio del estado de tipo booleano
        setEstado(!estado);

        // Cambio del estado de tipo string
        setEstadoString("Nuevo string")

        // Cambio del estado de tipo numerico
        setEstadoNumero(estadoNumero + 1);

        // Cambio del estado de tipo array
        setEstadoArray([5, 6, 7, 8, 9]);
        console.log(estadoArray)

        // Cambio del estado de tipo objeto
        setEstadoObjeto({
            nuevoNombre: "Juanito",
            nuevoApellido: "Perez"
        })
        console.log(estadoObjeto);

    }

    return(
        <div>
            <p>Valor en el estado: {estado ? "Verdadero" : "Falso"}</p>
            <p>Valor en el estado de tipo String: {estadoString}</p>
            <p>Valor en el estado numerico: {estadoNumero}</p>


            <button
                onClick={handleCambioEstado}
            >
                Pulse aca para cambiar el estado
            </button>
        </div>
    );
}

export { ComponenteConEstados };
