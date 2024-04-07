import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/portada.css";
import fondo from "../../src/img/portada.png"

function Portada() {
  return (
    <div className="contenedor">
       <img src={fondo} className='fondoStyle'/>
      <div>
        <div className="d-grid gap-2 col-1 mx-auto fixed-bottom m-5">
          <Link to="/pantalla1" className="btn btn-danger btnComprar" role="button">
            COMPRAR AHORA
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Portada;
