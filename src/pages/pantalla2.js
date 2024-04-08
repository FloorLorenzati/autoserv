import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "../css/pantalla2.css";
// IMAGENES 
import simple from "../img/simple.png"
import especial from "../img/especial.png"
import bañado from "../img/bañado.png"
import tresGustos from "../img/tresgustos.png"
// ------

function pantalla2() {
  const pantallaMenorA1000px = () => {
    return window.innerWidth < 1000;
  };

  const menorA1000pxContenedor = () => {
    if (pantallaMenorA1000px()) {
      return (
        <>
          <div className="container m-4 mx-auto containerInfo w-75">
            <div className="row">
              <div className="col-md-3 ">
                <Link to="/descripcion" role="button" className="linkNoUnderline">
                  <div className="card h-300 mb-4">
                    <img src={simple} className="carImgTopMobile" />
                    <div className="card-body ">
                      <h5 className="card-title text-center textDecoration">SIMPLE</h5>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-3">
                {/* <Link to="/pantalla2" role="button" className="linkNoUnderline"> */}
                <div className="card h-300 mb-4">
                  <img src={especial} className="carImgTopMobile" />
                  <div className="card-body">
                    <h5 className="card-title text-center textDecoration">ESPECIAL</h5>
                  </div>
                </div>
                {/* </Link> */}
              </div>
              <div className="col-md-3">
                {/* <Link to="/pantalla2" role="button" className="linkNoUnderline"> */}
                <div className="card h-300 mb-4">
                  <img src={bañado} className="carImgTopMobile" />
                  <div className="card-body">
                    <h5 className="card-title text-center textDecoration" >BAÑADO</h5>
                  </div>
                </div>
                {/* </Link> */}
              </div>
              <div className="col-md-3">
                {/* <Link to="/pantalla2" role="button" className="linkNoUnderline"> */}
                <div className="card h-300 mb-4">
                  <img src={tresGustos} className="carImgTopMobile" />
                  <div className="card-body">
                    <h5 className="card-title text-center textDecoration" >TRES GUSTOS</h5>
                  </div>
                </div>
                {/* </Link> */}
              </div>
            </div>



            <div className="text-center flex-md-row flex-column justify-content-center m-4">

              <Link to="/pago" className="btn btnGreen btn-success btnComprar customBtn" role="button">
                Pagar
              </Link>
              <Link to="/pantalla1" className="btn btnRed btn-danger btnComprar customBtn ml-md-2 mt-md-0 mt-2" role="button">
                Cancelar Orden
              </Link>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="container m-4 mx-auto containerInfo">
            <div className="row">
              <div className="col-md-3 ">
                <Link to="/descripcion" role="button" className="linkNoUnderline">
                  <div className="card h-300 mb-4">
                    <img src={simple} className="carImgTop" />
                    <div className="card-body ">
                      <h5 className="card-title text-center textDecoration" >SIMPLE</h5>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-3">
                {/* <Link to="/pantalla2" role="button" className="linkNoUnderline"> */}
                <div className="card h-300 mb-4">
                  <img src={especial} className="carImgTop" />
                  <div className="card-body">
                    <h5 className="card-title text-center textDecoration" >ESPECIAL</h5>
                  </div>
                </div>
                {/* </Link> */}
              </div>
              <div className="col-md-3">
                {/* <Link to="/pantalla2" role="button" className="linkNoUnderline"> */}
                <div className="card h-300 mb-4">
                  <img src={bañado} className="carImgTop" />
                  <div className="card-body">
                    <h5 className="card-title text-center textDecoration" >BAÑADO</h5>
                  </div>
                </div>
                {/* </Link> */}
              </div>
              <div className="col-md-3">
                {/* <Link to="/pantalla2" role="button" className="linkNoUnderline"> */}
                <div className="card h-300 mb-4">
                  <img src={tresGustos} className="carImgTop" />
                  <div className="card-body">
                    <h5 className="card-title text-center textDecoration" >TRES GUSTOS</h5>
                  </div>
                </div>
                {/* </Link> */}
              </div>
            </div>



            <div className="text-center flex-md-row flex-column justify-content-center m-4">

              <Link to="/pago" className="btn btnGreen btn-success btnComprar customBtn" role="button">
                Pagar
              </Link>
              <Link to="/pantalla1" className="btn btnRed btn-danger btnComprar customBtn ml-md-2 mt-md-0 mt-2" role="button">
                Cancelar Orden
              </Link>
            </div>
          </div>

        </>
      );
    }
  };



  return (
    <>

      <nav className='containerPantalla2'>
      </nav>
      <div className='containerBarra'></div>
      <h1 className='title m-5 '>CUCURUCHOS</h1>

      {menorA1000pxContenedor()}
    </>
  );
}

export default pantalla2;


