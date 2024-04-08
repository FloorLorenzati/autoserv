import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/pago.css";
import logo from "../img/logo.png";
import tarjeta1 from "../img/tarjetas.png";
import tarjeta2 from "../img/tarjetas2.png";

function Pago() {

  const pantallaMenorA1000px = () => {
    return window.innerWidth < 1000;
  };

  const menorA1000pxContenedor = () => {
    if (pantallaMenorA1000px()) {
      return (
        <>
          <div className="container w-75 mt-5 mb-5 border p-4 rounded fondoForm">
            <div className="align-items-center text-center">
              <h4 className='totalPagar fs-3'>Total a Pagar: $5900</h4>
              <br></br>
              <div className="d-flex justify-content-center">
                <Link to="/pantalla2" className="btn btn-sm btnRed me-2" role="button">Cancelar Orden</Link>
                <Link to="" className="btn btn-sm btnGreen ms-2" role="button">Ver detalle</Link>
              </div>
            </div>
          </div>

          <div className="container w-75 border rounded p-4 fondoForm">
            <h2 className='totalPagar'>Formas de pago</h2>
            <br></br>
            <div className="container">
              <img src={tarjeta1} className="img-fluid" />
            </div>
            <br></br>
            <div >
              <img src={tarjeta2} className="img-fluid" />
            </div>

            <br></br>

            <form>
              <div className="form-group" style={{ padding: '1em' }}>
                <label htmlFor="nombreTitular">Nombre del titular<span className="required">*</span></label>
                <input type="text" className="form-control" id="nombreTitular" required />
              </div>
              <div className="form-group" style={{ padding: '1em' }}>
                <label htmlFor="numeroTarjeta">Número de tarjeta<span className="required">*</span></label>
                <input type="text" className="form-control" id="numeroTarjeta" required />
              </div>
              <div className="form-group" style={{ padding: '1em' }}>
                <label htmlFor="fechaExpiracion">Fecha de expiración<span className="required">*</span></label>
                <div className="row">
                  <div className="col-6">
                    <input type="text" className="form-control" id="mesExpiracion" required />
                  </div>
                  <div className="col-6">
                    <input type="text" className="form-control" id="anioExpiracion" required />
                  </div>
                </div>
              </div>
              <div className="form-group" style={{ padding: '1em' }}>
                <label htmlFor="codigoSeguridad">Código de seguridad<span className="required">*</span></label>
                <input type="text" className="form-control w-25" id="codigoSeguridad" required />
              </div>
              <button type="submit" className="btn btn-success btnGreen" style={{ margin: '1em' }}>Aceptar</button>
            </form>

          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="col-md-8">
            <div style={{ backgroundColor: '#F8F9FA', padding: '20px', borderRadius: '5px', width: '75%', margin: '0 auto', marginTop: '3em', marginBottom: '2em', display: 'flex', alignItems: 'center' }}>
              <div style={{ marginRight: 'auto' }}>
                <h4 className='totalPagar' >Total a Pagar</h4>
                <h4 className='montoPagar' >$300</h4>
              </div>
              <div>
                <Link to="" className="btn btnGreen btn-success btnComprar customBtn" role="button">
                  Ver detalle
                </Link>
                <br></br>
                <Link to="/pantalla2" className="btn btnRed btn-danger btnComprar customBtn" role="button" style={{ marginTop: '20px' }}>
                  Cancelar Orden
                </Link>
              </div>
            </div>
          </div>

          <div className="container w-50 border rounded p-4 fondoForm">

            <div className="row">
            <h2 className='formasPago'>Formas de pago</h2>


              <div className="col-md-6">
                <img src={tarjeta1} className="img-fluid" />
              </div>
              <div className="col-md-6">
                <img src={tarjeta2} className="img-fluid" />
              </div>
            </div>
            <br></br>

            <form className='w-100'>
              <div className="form-group" style={{ padding: '1em' }}>
                <label htmlFor="nombreTitular">Nombre del titular<span className="required">*</span></label>
                <input type="text" className="form-control" id="nombreTitular" required />
              </div>
              <div className="form-group" style={{ padding: '1em' }}>
                <label htmlFor="numeroTarjeta">Número de tarjeta<span className="required">*</span></label>
                <input type="text" className="form-control" id="numeroTarjeta" required />
              </div>
              <div className="form-group" style={{ padding: '1em' }}>
                <label htmlFor="fechaExpiracion">Fecha de expiración<span className="required">*</span></label>
                <div className="row">
                  <div className="col-6">
                    <input type="text" className="form-control" id="mesExpiracion" required />
                  </div>
                  <div className="col-6">
                    <input type="text" className="form-control" id="anioExpiracion" required />
                  </div>
                </div>
              </div>
              <div className="form-group" style={{ padding: '1em' }}>
                <label htmlFor="codigoSeguridad">Código de seguridad<span className="required">*</span></label>
                <input type="text" className="form-control w-25" id="codigoSeguridad" required />
              </div>
              <button type="submit" className="btn btn-success btnGreen" style={{ margin: '1em' }}>Aceptar</button>
            </form>

          </div>

        </>
      );
    }
  };



  return (
    <>

      <div className='portadaPago'>
        <div className="row">
          <div className="col-md-2">
            <img src={logo} alt="Logo" className='logo mt-5' style={{ maxHeight: '20vh' }} />
          </div>
          {menorA1000pxContenedor()}
        </div>
        <br></br>
        <br></br>

      </div>
      
    </>
  );
}

export default Pago;
