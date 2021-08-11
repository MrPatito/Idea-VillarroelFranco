import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [contador, setContador] = useState(1);
    const [stock, setStock] = useState(7)
    // const [btnIncr, setBtnIncr] = useState(false)
    // const [btnDecr, setBtnDecr] = useState(false)
    
    // useEffect(()=>{
        
    //     if (stock > 0){
    //         setBtnDecr = false
    //         setBtnIncr = true 

    //         console.log("ahre")
    //       }
    //     else{
    //         setBtnDecr = true
    //         setBtnIncr = true 
    //       }
    // },) 


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
            <div className='container'>
                <p className='heading'>Contador</p>
                <p className='counter'>{contador}</p>
                <button onClick={decr} className='botonContador' id='decr'>-</button>
                <button onClick={incr} className='botonContador' id='incr'>+</button>
            </div>
            
        );
        
}
export default Counter;
