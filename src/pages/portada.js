import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/portada.css";

function Portada() {
  return (
    <div className='portadaContainer'>
      <div className="d-grid gap-2 col-1 mx-auto fixed-bottom m-5">
        <Link to="/pantalla1" className="btn btn-danger btnComprar" role="button">
          COMPRAR AHORA
        </Link>
      </div>
    </div>
  );
}

export default Portada;
