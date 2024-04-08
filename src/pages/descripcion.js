import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/descripcion.css";
import simple from "../img/simple.png";
import bañado from "../img/bañado.png";

import logo from "../img/logo.png";


function Descripcion() {




    const pantallaMenorA1000px = () => {
        return window.innerWidth < 1000;
    };

    const menorA1000pxContenedor = () => {
        if (pantallaMenorA1000px()) {
            return (
                <>
                    <div className='fondoDescripcion'>
                        <div className="contenedorCentralMobile">
                            <h2 className='text-center'>SIMPLE</h2>
                            <br></br>
                            <img src={simple} alt="Imagen Grande" className="img-fluid imagenGrandeMobile " />
                            <img src={bañado} alt="Imagen Grande" className="img-fluid imagenGrandeMobile " />

                            <p className='fs-3'> Cucurucho con una bocha de helado, sabor a elección.</p>

                            <p className='fs-3'><p className='fs-3'> Cucurucho con baño de repostería y crocante de maní, con una bochas de helado, sabores a elección.</p>
                                <br></br>
                                <p className='fs-3'> Cucurucho con baño de repostería y crocante de maní, con una bochas de helado, sabores a elección.</p>
                            </p>
                            <br></br>
                            <Link to="/pago" className="btn btnGreen btn-success btnComprar customBtn" role="button">
                                Pagar
                            </Link>
                            <br></br>
                            <Link to="/pantalla2" className="btn btnRed btn-danger btnComprar customBtn" role="button">
                                Cancelar Orden
                            </Link>
                        </div>

                    </div>
                    <br></br>
                </>
            );
        } else {
            return (
                <>
                    <div className='fondoDescripcion'>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <div className="contenedor-central">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h2 className='text-center'>SIMPLE</h2>
                                            <br />
                                            <br />
                                            <p className='fs-3'> Cucurucho con una bocha de helado, sabor a elección.</p>
                                            <br /><br />
                                            <p className='fs-3'> Cucurucho con baño de repostería y crocante de maní, con una bocha de helado, sabores a elección.</p>
                                            <br /><br />
                                            <p className='fs-3'> Cucurucho con baño de repostería y crocante de maní, con una bocha de helado, sabores a elección.</p>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={simple} alt="Imagen Grande" className="img-fluid imagen-pequena" />
                                            <img src={bañado} alt="Otra Imagen" className="img-fluid imagen-derecha" />
                                        </div>
                                        <h1>$12.89</h1>
                                        <Link to="/pago" className="btn btnGreen btn-success btnComprar customBtn" role="button">
                                            Pagar
                                        </Link>
                                        <Link to="/pantalla2" className="btn btnRed btn-danger btnComprar customBtn" role="button">
                                            Cancelar Orden
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </>
            );
        }
    };



    return (
        <>

            <div className='portadaPago'>
            <img src={logo} alt="Logo" className='logo m-5' style={{ maxHeight: '20vh' }} />

                {menorA1000pxContenedor()}



            </div>

        </>
    );
}

export default Descripcion;

