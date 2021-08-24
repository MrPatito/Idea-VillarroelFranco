import React, { useEffect, useState } from 'react'
// import React from 'react'
import ItemDetail from './ItemDetail/itemDetail'

function ItemDetailContainer(){
        const [info, setInfo] = useState([])
    

        const urlData = "https://pokeapi.co/api/v2/pokemon/1"

        useEffect(()=>{
        
                fetch(`${urlData}`)
                .then((response) => response.json())
                .then(data =>{
                    sessionStorage.setItem('datos', JSON.stringify(data))
                    console.log('data', data)
                   
                    let datos = sessionStorage.getItem('datos')
                    let datosParse = JSON.parse(datos)
                    let ability = datosParse.abilities
                    console.log(ability)
                    console.log(datosParse)
                    setInfo(ability)
                })
                
                // .then(data => sessionStorage.setItem('datos', 'response'))
                .catch((error)=> console.log("error", error));
                },[] );
    


    return(
            <ItemDetail dato={info}/>
    );
    
    }
    export default ItemDetailContainer;
    
