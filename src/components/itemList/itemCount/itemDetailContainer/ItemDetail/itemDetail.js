// import React from 'react'
import React, { useEffect, useState } from 'react'


function ItemDetail(props){
    const [info, setInfo] = useState([])

    const items = [
        {key: '1', nombre: 'dosci', potencia: '200W'},
        {key: '2', nombre: 'treci', potencia: '300W'},
        {key: '3', nombre: 'cuatri', potencia: '400W'},
        {key: '4', nombre: 'ochi', potencia: '800W'},
        {key: '5', nombre: 'milonga', potencia: '1000W'},
    ]
    
    useEffect(()=>{
        setTimeout(()=>{
                setInfo(items)
            
},1000)
},)

    

    return(

        
            <p>{props.potencia}</p>
        
        
    );
    
    }
    export default ItemDetail;
    
