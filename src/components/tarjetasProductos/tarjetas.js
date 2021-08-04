import React from 'react';
import './tarjetasCss.css';


export default function Tarjeta() {
    return (
                <div className="selector" id="dosci">
                    <div className="foto" id="fotoDosci">
                        <img src="./Led-eficiencia.png" alt="panel 200W con 4 lamparas led"/>
                    </div>
    
                    <h3>Albireo A</h3>
                    <p id="infoDosci">producto diseñado para cubrir 0.6m2 de superficie.</p>
                    <button type="button"   id="selectProdu2">Agregar</button>
                    <button type="button"   id="info2">Info</button>
                    <button type="button"   id="eliminarProdu2">X</button>
                </div>
    );
}