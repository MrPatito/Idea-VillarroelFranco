import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail/itemDetail'

const ItemDetailContainer = () =>{
        const [info, setInfo] = useState([])
    

        const urlData = "https://pokeapi.co/api/v2/pokemon/1"
        console.log(info)
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
                
                .catch((error)=> console.log("error", error));
        }, []);
    
                

    return (
      <div>
        <ItemDetail datosParse={info} />
      </div>
    );
    
    }
    export default ItemDetailContainer;
    
