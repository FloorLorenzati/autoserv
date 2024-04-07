import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "../css/pantalla1.css";
// IMAGENES 
import logo from "../img/logo.png"
import banner1 from "../img/banner1.png"
import bebidas from "../img/bebidas.png"
import cafeteria from "../img/cafeteria.png"
import cucuruchos from "../img/cucuruchos.png"
import chocolate from "../img/chocolate.png"
import especialidades from "../img/especialidades.png"
import copaHelada from "../img/copahelada.png"
import copaDulce from "../img/copadulce.png"
import promociones from "../img/promociones.png"
// ------

function pantalla1() {
  return (

    <div>
      <img id='banner' src={banner1} />
      <img id='logo' src={logo} />


      <div className='container'>
        <div class="container">
          <div class="container m-5 mx-auto">
            <h1 className='title'>ELIGE UNA OPCIÓN</h1>
            <div class="row">
              <div class="col-md-3">
                <a href="url_destino">
                  <div class="card h-300 mb-4">
                    <img src={bebidas} class="card-img-top" />
                    <div class="card-body ">
                      <h5 class="card-title text-center" id='textDecoration'>BEBIDAS</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-md-3">
                <a href="url_destino">
                  <div class="card h-300 mb-4">
                    <img src={cafeteria} class="card-img-top" />
                    <div class="card-body">
                      <h5 class="card-title text-center" id='textDecoration'>CAFETERIA</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-md-3">
                <a href="url_destino">
                  <div class="card h-300 mb-4">
                    <img src={cucuruchos} class="card-img-top" />
                    <div class="card-body">
                      <h5 class="card-title text-center" id='textDecoration'>CUCURUCHO</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-md-3">
                <a href="url_destino">
                  <div class="card h-300 mb-4">
                    <img src={chocolate} class="card-img-top" />
                    <div class="card-body">
                      <h5 class="card-title text-center" id='textDecoration'>CHOCOLATE</h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <br></br>
            <div class="row">
              <div class="col-md-3">
                <a href="url_destino">
                  <div class="card h-300 mb-4">
                    <img src={especialidades} class="card-img-top" />
                    <div class="card-body">
                      <h5 class="card-title text-center" id='textDecoration'>ESPECIALIDADES</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-md-3">
                <a href="url_destino">
                  <div class="card h-300 mb-4">
                    <img src={copaHelada} class="card-img-top" />
                    <div class="card-body">
                      <h5 class="card-title text-center" id='textDecoration'>COPA HELADA</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-md-3">
                <a href="url_destino">
                  <div class="card h-300 mb-4">
                    <img src={copaDulce} class="card-img-top" />
                    <div class="card-body">
                      <h5 class="card-title text-center" id='textDecoration'>COPA DULCE</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-md-3">
                <a href="url_destino">
                  <div class="card h-300 mb-4 ">
                    <img src={promociones} class="card-img-top" />
                    <div class="card-body">
                      <h5 class="card-title text-center" id='textDecoration'>PROMOCIONES</h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>

          </div>

        </div>
        <div className="text-center mx-auto ">
          <Link to="/pantalla1" className="btn btn-danger btnComprar" role="button">
            Pagar
          </Link>
          <Link to="/pantalla1" className="btn btn-danger btnComprar" role="button">
            Cancelar Orden
          </Link>
        </div>
      </div>
    </div>
  )
}
export default pantalla1;


