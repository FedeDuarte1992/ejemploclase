import "./Seccion.css";
import hogwarts from "../../assets/img/hogwarts.jpg";
import Boton from "../boton/Boton";
import { Link } from "react-router-dom";

function Seccion() {
  const handlerClicBoton = () => {
    alert("Hiciste click en el boton");
  };
  return (
    <section className="seccion">
        <h2> Información sobre Hogwarts </h2>
        <p>
            {" "}
            La escuela de magia y hechiceria de Hogwarts es un lugar mágico donde
            los jóvenes magos y brujas aprenden a dominar sus poderes.
        </p>
        <img src={hogwarts} />
        <Boton texto="Ingresa aquí" color="pink" onClick={handlerClicBoton} />
        <Boton texto="Consulta" color="green" />
        <Link to="/personajes">
            <Boton texto="Personajes" color="yellow" />
        </Link>
        <Link to="/profesores">
        <Boton texto="Profesores" color="red" />
        </Link>
        </section>
    );
}

export default Seccion;
