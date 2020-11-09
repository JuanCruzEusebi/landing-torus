import React from 'react'
import './Slider.css'


const Slider = () => {
    return (
        <div className="slider-wrapper">
            <div className="envios-div">
                <i class="fas fa-truck"></i>
                <h2>Envios a todo el pais</h2>
                <h3>Por correo argentino y moto mensajeria</h3>
            </div>

            <div className="tarjetas-div">
                 <i class="far fa-credit-card"></i>
                <h2>Aceptamos todas las tarejtas de  <br/> credito y debito</h2>
                <h3>Y tambien Mercado Pago!</h3>
            </div>

            <div className="descuento-div">
                 <i class="fas fa-percentage"></i>
                <h2>20% de descuento</h2>
                <h3>Abonando en efectivo en Quilmes Centro</h3>
            </div>
        </div>
    )
}


export default Slider