import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/portada.css";
import logo from "../img/logo.png"

function Portada() {
  return (
    <div className='portadaContainer'>
      <div className='logo' style={{ backgroundImage: `url(${logo})`, height: '20vh', backgroundRepeat: 'no-repeat' }}>
        <div className=" text-center fixed-bottom m-5">
          <Link to="/pantalla1" className="btn btn-danger btnComprar" role="button">
            COMPRAR AHORA
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Portada;
