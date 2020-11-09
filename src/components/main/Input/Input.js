import React from 'react'
import './Input.css'
import './Input-query.css'

const Input = () => {
    return (
        <div className="input-container">
            <h1>Recibi todas las ofertas</h1>
            <p>¿Quieres recibir nuestras ofertas? <br className="linebreak" /> ¡Registrate ya mismo y comenzá a disfrutarlas!</p>
            <input type="text"/>
            <button>ENVIAR</button>
        </div>
    )
}

export default Input