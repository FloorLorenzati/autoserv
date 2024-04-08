import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "../css/pantalla1.css";
// IMAGENES 
import bebidas from "../img/bebidas.png"
import cafeteria from "../img/cafeteria.png"
import cucuruchos from "../img/cucuruchos.png"
import chocolate from "../img/chocolate.png"
import especialidades from "../img/especialidades.png"
import copaHelada from "../img/copahelada.png"
import copaDulce from "../img/copadulce.png"
import promociones from "../img/promociones.png"
import logo from "../img/logo.png"
// ------

function pantalla1() {


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
                {/* <Link to="/pantalla2" role="button" className="linkNoUnderline"> */}
                <div className="card h-300 mb-4 custom-card">
                  <img src={bebidas} className="carImgTopMobile" />
                  <div className="card-body ">
                    <h5 className="card-title text-center textDecoration" >BEBIDAS</h5>
                  </div>
                </div>
                {/* </Link> */}
              </div>
              <div className="col-md-3 ">
                {/* <Link to="/pantalla2" role="button" className="linkNoUnderline"> */}
                <div className="card h-300 mb-4 custom-card">
                  <img src={cafeteria} className="carImgTopMobile" />
                  <div className="card-body">
                    <h5 className="card-title text-center textDecoration" >CAFETERIA</h5>
                  </div>
                </div>
                {/* </Link> */}
              </div>
              <div className="col-md-3">
                <Link to="/pantalla2" role="button" className="linkNoUnderline">
                  <div className="card h-300 mb-4 custom-card">
                    <img src={cucuruchos} className="carImgTopMobile" />
                    <div className="card-body">
                      <h5 className="card-title text-center textDecoration" >CUCURUCHO</h5>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-3">
                {/* <Link to="/pantalla2" role="button" className="linkNoUnderline"> */}
                <div className="card h-300 mb-4 custom-card">
                  <img src={chocolate} className="carImgTopMobile" />
                  <div className="card-body">
                    <h5 className="card-title text-center textDecoration" >CHOCOLATE</h5>
                  </div>
                </div>
                {/* </Link> */}
              </div>
            </div>
            <br></br>
            <div className="row">
              <div className="col-md-3">
                {/* <Link to="/pantalla2" role="button" className="linkNoUnderline"> */}
                <div className="card h-300 mb-4 custom-card">
                  <img src={especialidades} className="carImgTopMobile" />
                  <div className="card-body">
                    <h5 className="card-title text-center textDecoration" >ESPECIALIDADES</h5>
                  </div>
                </div>
                {/* </Link> */}
              </div>
              <div className="col-md-3">
                {/* <Link to="/pantalla2" role="button" className="linkNoUnderline"> */}
                <div className="card h-300 mb-4 custom-card">
                  <img src={copaHelada} className="carImgTopMobile" />
                  <div className="card-body">
                    <h5 className="card-title text-center textDecoration" >COPA HELADA</h5>
                  </div>
                </div>
                {/* </Link> */}
              </div>
              <div className="col-md-3">
                {/* <Link to="/pantalla2" role="button" className="linkNoUnderline"> */}
                <div className="card h-300 mb-4 custom-card">
                  <img src={copaDulce} className="carImgTopMobile" />
                  <div className="card-body">
                    <h5 className="card-title text-center textDecoration" >COPA DULCE</h5>
                  </div>
                </div>
                {/* </Link> */}
              </div>
              <div className="col-md-3">
                {/* <Link to="/pantalla2" role="button" className="linkNoUnderline"> */}
                <div className="card h-300 mb-4 custom-card">
                  <img src={promociones} className="carImgTopMobile " />
                  <div className="card-body">
                    <h5 className="card-title text-center textDecoration" id=''>PROMOCIONES</h5>
                  </div>
                </div>
                {/* </Link> */}
              </div>
            </div>


            <div className="text-center flex-md-row flex-column justify-content-center m-4">
              <Link to="/pago" className="btn btnGreen btn-success btnComprar customBtn" role="button">
                Pagar
              </Link>
              <Link to="/" className="btn btnRed btn-danger btnComprar customBtn ml-md-2 mt-md-0 mt-2" role="button">
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
                {/* <Link to="/pantalla2" role="button" className="linkNoUnderline"> */}
                <div className="card h-300 mb-4">
                  <img src={bebidas} className="carImgTop" />
                  <div className="card-body ">
                    <h5 className="card-title text-center textDecoration" >BEBIDAS</h5>
                  </div>
                </div>
                {/* </Link> */}
              </div>
              <div className="col-md-3">
                {/* <Link to="/pantalla2" role="button" className="linkNoUnderline"> */}
                <div className="card h-300 mb-4">
                  <img src={cafeteria} className="carImgTop" />
                  <div className="card-body">
                    <h5 className="card-title text-center textDecoration" >CAFETERIA</h5>
                  </div>
                </div>
                {/* </Link> */}
              </div>
              <div className="col-md-3">
                <Link to="/pantalla2" role="button" className="linkNoUnderline">
                  <div className="card h-300 mb-4">
                    <img src={cucuruchos} className="carImgTop" />
                    <div className="card-body">
                      <h5 className="card-title text-center textDecoration" >CUCURUCHO</h5>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-3">
                {/* <Link to="/pantalla2" role="button" className="linkNoUnderline"> */}
                <div className="card h-300 mb-4">
                  <img src={chocolate} className="carImgTop" />
                  <div className="card-body">
                    <h5 className="card-title text-center textDecoration" >CHOCOLATE</h5>
                  </div>
                </div>
                {/* </Link> */}
              </div>
            </div>
            <br></br>
            <div className="row">
              <div className="col-md-3">
                {/* <Link to="/pantalla2" role="button" className="linkNoUnderline"> */}
                <div className="card h-300 mb-4">
                  <img src={especialidades} className="carImgTop" />
                  <div className="card-body">
                    <h5 className="card-title text-center textDecoration" >ESPECIALIDADES</h5>
                  </div>
                </div>
                {/* </Link> */}
              </div>
              <div className="col-md-3">
                {/* <Link to="/pantalla2" role="button" className="linkNoUnderline"> */}
                <div className="card h-300 mb-4">
                  <img src={copaHelada} className="carImgTop" />
                  <div className="card-body">
                    <h5 className="card-title text-center textDecoration" >COPA HELADA</h5>
                  </div>
                </div>
                {/* </Link> */}
              </div>
              <div className="col-md-3">
                {/* <Link to="/pantalla2" role="button" className="linkNoUnderline"> */}
                <div className="card h-300 mb-4">
                  <img src={copaDulce} className="carImgTop" />
                  <div className="card-body">
                    <h5 className="card-title text-center textDecoration" >COPA DULCE</h5>
                  </div>
                </div>
                {/* </Link> */}
              </div>
              <div className="col-md-3">
                {/* <Link to="/pantalla2" role="button" className="linkNoUnderline"> */}
                <div className="card h-300 mb-4 ">
                  <img src={promociones} className="carImgTop" />
                  <div className="card-body">
                    <h5 className="card-title text-center textDecoration" >PROMOCIONES</h5>
                  </div>
                </div>
                {/* </Link> */}
              </div>
            </div>


            <div className="text-center flex-md-row flex-column justify-content-center m-4">
              <Link to="/pago" className="btn btnGreen btn-success btnComprar customBtn" role="button">
                Pagar
              </Link>
              <Link to="/" className="btn btnRed btn-danger btnComprar customBtn ml-md-2 mt-md-0 mt-2" role="button">
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

      <nav className='containerPantalla1'>
        {/* <div style={{ backgroundImage: `url(${logo})`, height: '30vh', backgroundRepeat: 'no-repeat' }}></div> */}
      </nav>
      <h1 className='title m-5'>ELIGE UNA OPCIÓN</h1>
      {menorA1000pxContenedor()}
    </>
  );
}


























export default pantalla1;


