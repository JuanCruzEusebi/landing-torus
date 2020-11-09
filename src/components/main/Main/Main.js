import React, { useState } from 'react'
import './Main.css'
import './Main-query.css'



const Main = () => {

 const [clase, setClase] = useState(true);

    return (
        <div className="main-container">
            <div className="main-div">
                <div className="navbar">                    
                    <div className="navbar-menu">
                        <div className={clase ? "navbar-menu-container" : "navbar-menu-container-active"} 
                                onClick={() => setClase(!clase)} >
                            <div className="ham1"></div>
                            <div className="ham2"></div>
                            <div className="ham3"></div>                            
                        </div>                        
                    </div>                    
                    
                    <div className="navbar-info">
                         <i class="fas fa-shopping-cart"></i>     
                    </div>
                </div>       
                
                
                
                <div className="title">
                    <div className="title-div">
                        <h1>TORUS</h1>
                        <h2>JOYERIA DIGITAL</h2>
                    </div>                              
                </div>

                <div className={clase ? "ham-menu" : "ham-menu-active"}  >
                    <ul className="ham-list">
                        <a href="_blank">Iniciar Sesion</a>
                        <a href="_blank">Registrarse</a>
                        <a href="_blank">Inicio</a>
                        <a href="_blank">Productos</a>
                        <a href="_blank">Quienes Somos</a>
                        <a href="_blank">Como Comprar</a>
                    </ul>
                </div>




                <div className="flecha"><i class="fas fa-arrow-down"></i></div>
            </div>
        </div>
    )
}

export default Main;