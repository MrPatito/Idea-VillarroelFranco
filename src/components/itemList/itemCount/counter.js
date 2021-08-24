// import React from 'react'
import React, { useEffect, useState } from 'react';

import ItemDetailContainer from './itemDetailContainer/itemDetailContainer';



const Counter = (props) => {
    const [contador, setContador] = useState(1);
    const [stock, setStock] = useState(7)
    const [mounted, setMounted] = useState(false)
    const desplegar = () => setMounted(!mounted)

    
    
    


        
        useEffect(()=>{
                setTimeout(()=>{
                    if (mounted === false){
                        console.log('oculto')
                        
                    
                    }
                    else{
                        console.log('desplegado')
                        // setDetail(items)
                    } 
        },1000)
        }, [mounted])
 

    function decr (){
        if(contador > 0 ){
            setContador(contador -1);
            setStock(stock + 1)
            console.log(stock)
        }
        else{
            console.log('ahre')
        }  
    }
    function incr (){
        if(stock > 0){
            setContador(contador + 1);
            setStock(stock - 1)
            console.log(stock)

        }
        else{
            console.log('ahre lak')
        }  
    }

    

    

    
    return(
            <div className='producto'>
                <img className='fotos' src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=707&q=80'/>
                <p className='heading'>{props.nombre}</p>
                {mounted && <ItemDetailContainer/>}
                <p className='counter'>{contador}</p>
                
                <button onClick={incr} className='botonContador' id='incr'>+</button>
                <button onClick={decr} className='botonContador' id='decr'>-</button>
                <button onClick={desplegar} className='botonContador' id='info'>Info</button>
            </div>
            
        );
        
}
export default Counter;
