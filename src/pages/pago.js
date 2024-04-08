import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/pago.css";
import logo from "../img/logo.png";
import tarjeta1 from "../img/tarjetas.png";
import tarjeta2 from "../img/tarjetas2.png";

function Pago() {
  return (
    <>

      <div className='portadaPago'>
        <div className="row">
          <div className="col-md-2">
            <img src={logo} alt="Logo" className='logo' style={{ maxHeight: '20vh'}} />
          </div>
          <div className="col-md-8">
            <div className="container mt-5 mb-5 border p-4 rounded bg-white">
              <div className="row">
                <div className="col-md-6">
                  <h4>Total a Pagar</h4>
                  <p>$300</p>
                </div>
                <div className="col-md-6 text-right">
                  <button className="btn btn-success mr-2">Ver Detalle</button>
                  <button className="btn btn-danger">Cancelar Orden</button>
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
            <button type="submit" className="btn btn-primary" style={{ margin: '1em' }}>Pagar</button>
          </form>

        </div>          <br></br>
      </div></>
  );
}

export default Pago;
