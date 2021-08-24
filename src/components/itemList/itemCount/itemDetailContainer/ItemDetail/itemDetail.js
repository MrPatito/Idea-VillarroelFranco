// import React from 'react'
import React, { useEffect, useState } from 'react'


function ItemDetail(props){
    const [info, setInfo] = useState([])

    const urlData = "https://pokeapi.co/api/v2/" 

    const items = [
        {key: '1', nombre: 'dosci', potencia: '200W'},
        {key: '2', nombre: 'treci', potencia: '300W'},
        {key: '3', nombre: 'cuatri', potencia: '400W'},
        {key: '4', nombre: 'ochi', potencia: '800W'},
        {key: '5', nombre: 'milonga', potencia: '1000W'},
    ]
    
    useEffect(()=>{
        
                fetch(`${urlData}`)
                .then((response) => response.json())
                .then(data => console.log('data', data))
                .catch((error)=> console.log("error", error));
                }, []);

    

    return(

        
            <p>{props.potencia}</p>
        
        
    );
    
    }
    export default ItemDetail;
    
