import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "../css/pantalla2.css";
// IMAGENES 
import simple from "../img/simple.png"
import especial from "../img/especial.png"
import bañado from "../img/bañado.png"
import tresGustos from "../img/tresgustos.png"
import logo from "../img/logo.png"
// ------

function pantalla2() {
  return (
    <>
      <nav className='containerPantalla2'>
      <div style={{ backgroundImage: `url(${logo})`,height: '30vh',backgroundRepeat:'no-repeat' }}></div>
      </nav>
      <div className='containerBarra'></div>
      <div class="container m-4 mx-auto containerInfo">
        <h1 className='title m-5'>CUCURUCHOS</h1>
        <div class="row">
          <div class="col-md-3 ">
            <Link to="/pantalla2" role="button">
              <div class="card h-300 mb-4">
                <img src={simple} class="card-img-top" />
                <div class="card-body ">
                  <h5 class="card-title text-center" id='textDecoration'>SIMPLE</h5>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-3">
            {/* <a href="url_destino"> */}
            <div class="card h-300 mb-4">
              <img src={especial} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center" id='textDecoration'>ESPECIAL</h5>
              </div>
            </div>
            {/* </a> */}
          </div>
          <div class="col-md-3">
            {/* <a href="url_destino"> */}
            <div class="card h-300 mb-4">
              <img src={bañado} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center" id='textDecoration'>BAÑADO</h5>
              </div>
            </div>
            {/* </a> */}
          </div>
          <div class="col-md-3">
            {/* <a href="url_destino"> */}
            <div class="card h-300 mb-4">
              <img src={tresGustos} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center" id='textDecoration'>TRES GUSTOS</h5>
              </div>
            </div>
            {/* </a> */}
          </div>
        </div>



        <div class="text-center flex-md-row flex-column justify-content-center m-4">

          <Link to="/pago" class="btn btnGreen btn-success btnComprar customBtn" role="button">
            Pagar
          </Link>
          <Link to="/pantalla1" class="btn btnRed btn-danger btnComprar customBtn ml-md-2 mt-md-0 mt-2" role="button">
            Cancelar Orden
          </Link>
        </div>
      </div>
    </>
  )
}
export default pantalla2;


