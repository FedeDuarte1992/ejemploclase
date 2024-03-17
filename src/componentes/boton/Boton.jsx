import PropTypes from "prop-types";
import "./Boton.css";

function Boton(props){
    const estilosBoton ={
    backgroundColor: props.color   
    }

    return(
        <div className="contenedor-btn">
            <buton className="boton" style={estilosBoton} onClick={props.onClick}> {props.texto} </buton>
        </div>
    )
}

Boton.propTypes = {
    color: PropTypes.string,
    texto: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};


export default Boton;