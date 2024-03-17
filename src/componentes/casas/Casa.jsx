import PropTypes from "prop-types";
import imagenes from "./imagenes";
import "./Casa.css";

function Casa(props) {
    console.log('Ruta de la imagen:', imagenes[props.imagen]);
    return (
        <section className="seccion-casa">
        <h2> {props.nombre} </h2>
        <p> {props.valores} </p>
        <p> {props.animal} </p>
        <p> {props.director} </p>
        <p> {props.ubicacion} </p>
        <div className="contenedor-img">
        <img src={imagenes[props.imagen]} alt={props.nombre}/>
        </div>
        </section>
    );
    }
    

    Casa.propTypes = {
    nombre: PropTypes.string.isRequired,
    valores: PropTypes.string,
    animal: PropTypes.string,
    color: PropTypes.string,
    director: PropTypes.string,
    ubicacion: PropTypes.string,
    imagen: PropTypes.string,

    };

    export default Casa;