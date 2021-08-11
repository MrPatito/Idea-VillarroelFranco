import React, { useEffect, useState } from 'react';

const Counter = ({stock, botonesActivos, add}) => {
    const [contador, setContador] = useState(1);
    
    stock = 7
    botonesActivos = false
    useEffect(()=>{
        if (contador <= 7 || contador >= 0){
            botonesActivos = false  
            console.log("ahre")
          }
        else{
            botonesActivos = true
          }
    })
    
    
    return(
            <div className='container'>
                <p className='heading'>Contador</p>
                <p className='counter'>{contador}</p>
                <button disabled={botonesActivos} onClick={() => setContador(contador -1)} className='botonContador' id='decr'>-</button>
                <button disabled={botonesActivos} onClick={() => setContador(contador +1)} className='botonContador' id='incr'>+</button>
            </div>
            
        );
        
}
export default Counter;
