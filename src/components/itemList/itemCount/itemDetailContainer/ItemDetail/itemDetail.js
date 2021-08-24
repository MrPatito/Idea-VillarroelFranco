// import React from 'react'
import React, { useEffect, useState } from 'react'


function ItemDetail(props){
    const [info, setInfo] = useState([])

    const urlData = "https://pokeapi.co/api/v2/pokemon/1" 

    
    
    useEffect(()=>{
        
                fetch(`${urlData}`)
                .then((response) => response.json())
                .then(data =>{
                    console.log('data', data)
                    sessionStorage.setItem('datos', JSON.stringify(data))
                })
                // .then(data => sessionStorage.setItem('datos', 'response'))
                .catch((error)=> console.log("error", error));
                }, );

    function datosApi (){
        let datos = sessionStorage.getItem('datos')
        let datosParse = JSON.parse(datos);
        console.log(datosParse)

    }

    return(

        
            <p>{}</p>
        
        
    );
    
    }
    export default ItemDetail;
    
