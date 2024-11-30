import "./styles.css";

const ComponenteBasico = () => {
    return(
        <div className="basic-component-container">
            <h1>Este es un componente basico</h1>

            <p>React, se puede utilizar como una fusion de HTML, CSS y JavaScript</p>
            <p>Cada componente es una funcion de tipo flecha, que retorna leguaje JSX (Muy similar al HTML)</p>

            <p>Los componentes son secciones de codigo que se pueden reutilizar las veces que un proyecto requiera</p>
            <p>Gracias a ellos, el concepto de modularizacion se trabaja a la perfeccion</p>
            <p>Ya que se pueden crear componentes para tareas especificas</p>
        </div>
    );
}

export { ComponenteBasico };