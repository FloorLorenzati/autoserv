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

  // Define el contenido del contenedor dinámicamente según el tamaño de la pantalla
  const contenidoContenedor = () => {
    if (pantallaMenorA1000px()) {
      return (
        <>
          <h4 className='totalPagar'>Total a Pagar</h4>
          <h4 className='montoPagar'>$5900</h4>
        </>
      );
    } else {
      return (
        <>
          <h4 className='totalPagar'>Total a Pagar</h4>
          <h4 className='montoPagar'>$300</h4>
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
          <div className="col-md-8">
            <div className="container mt-5 mb-5 border p-4 rounded bg-white">
              <div className="row">
                <div className="col-md-6">
                  {contenidoContenedor()}
                </div>
                <div className="col-md-6 align-items-left">
                  <Link to="" className="btn btnGreen btnComprar customBtn ml-md-2 mt-md-0 mt-2 mb-2" role="button">
                    Ver detalle
                  </Link>
                  <Link to="/pantalla2" className="btn btnRed btnComprar customBtn ml-md-2 mt-md-0 mt-2" role="button">
                    Cancelar Orden
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container border rounded bg-white p-4">
          <div className="row">
            <div className="col-md-6">
              <img src={tarjeta1} className="img-fluid" alt="Primera imagen" />
            </div>
            <div className="col-md-6">
              <img src={tarjeta2} className="img-fluid" alt="Segunda imagen" />
            </div>
          </div>
          <form>
            <div className="form-group" style={{ padding: '1em' }}>
              <label htmlFor="nombreTitular">Nombre del titular*</label>
              <input type="text" className="form-control" id="nombreTitular" placeholder="Nombre del titular" required />
            </div>
            <div className="form-group" style={{ padding: '1em' }}>
              <label htmlFor="numeroTarjeta">Número de tarjeta*</label>
              <input type="text" className="form-control" id="numeroTarjeta" placeholder="Número de tarjeta" required />
            </div>
            <div className="form-group" style={{ padding: '1em' }}>
              <label htmlFor="fechaExpiracion">Fecha de expiración*</label>
              <div className="row">
                <div className="col-6">
                  <input type="text" className="form-control" id="mesExpiracion" placeholder="MM" required />
                </div>
                <div className="col-6">
                  <input type="text" className="form-control" id="anioExpiracion" placeholder="YYYY" required />
                </div>
              </div>
            </div>
            <div className="form-group" style={{ padding: '1em' }}>
              <label htmlFor="codigoSeguridad">Código de seguridad*</label>
              <input type="text" className="form-control" id="codigoSeguridad" placeholder="Código de seguridad" required />
            </div>
            <button type="submit" className="btn btn-primary btnGreen" style={{ margin: '1em' }}>Aceptar</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Pago;
