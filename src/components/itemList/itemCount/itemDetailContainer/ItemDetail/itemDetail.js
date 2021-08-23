// import React from 'react'
import React, { useEffect, useState } from 'react'


function ItemDetail(props){
    const [info, setInfo] = useState([])
    const urlData = 'https://pokeapi.co/api/v2/pokemon/1'

    
    
    useEffect(()=>{
        fetch(`${urlData}`)
                        .then((response) => response.json())
                        .then((response) => sessionStorage.setItem('response', response))
                        // .then(data => console.log('data', response))
                        .then(data => sessionStorage.setItem('data', data))
                        
                        .catch((error)=> console.log("error", error));
                        
        // setInfo = data;
        
},[])

   let pokemons = sessionStorage.getItem('data')

   console.log(pokemons)

    

    return(

        
            <p>asdasdfa
                
            </p>
        
        
    );
    
    }
    export default ItemDetail;
    
