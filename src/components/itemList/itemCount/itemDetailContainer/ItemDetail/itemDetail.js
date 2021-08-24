// import React from 'react'
import React, { useEffect, useState } from 'react'


function ItemDetail(props){
    const [info, setInfo] = useState([])
<<<<<<< HEAD
    const urlData = 'https://pokeapi.co/api/v2/pokemon/1'
=======

    const urlData = "https://pokeapi.co/api/v2/pokemon/1" 
>>>>>>> SolucionandoGit

    
    
    useEffect(()=>{
<<<<<<< HEAD
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

    
=======
        
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
>>>>>>> SolucionandoGit

    return(

        
<<<<<<< HEAD
            <p>asdasdfa
                
            </p>
=======
            <p>{}</p>
>>>>>>> SolucionandoGit
        
        
    );
    
    }
    export default ItemDetail;
    
