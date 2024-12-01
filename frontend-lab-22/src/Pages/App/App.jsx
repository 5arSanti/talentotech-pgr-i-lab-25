import { AppProvider } from "../../Context";
import { ComponenteBasico } from "../Components/ComponenteBasico";
import { ComponenteConEfectos } from "../Components/ComponenteConEfectos";
import { ComponenteConEstados } from "../Components/ComponenteConEstados";
import { ComponenteConPropiedades } from "../Components/ComponenteConPropiedades";
import { MostrarDesdeContexto } from "../Components/MostrarDesdeContexto";
import { MostrarNoticias } from "../Components/MostrarNoticias";

import "./App.css";

const App = () => {
    return(
        <AppProvider>
            <div>
                <p>Hola, esta es mi primera pagina web con React.js</p>
                <ComponenteBasico/>

                <ComponenteConPropiedades/>
                
                <ComponenteConPropiedades 
                    nombre={"Carlos Patiño"} 
                    correo={"correo2.propiedades@email.com"}
                />

                <ComponenteConEstados/>

                <ComponenteConEfectos/>

                <MostrarDesdeContexto/>

                <MostrarNoticias/>
            </div>
        </AppProvider>
    )
}

export default App;

