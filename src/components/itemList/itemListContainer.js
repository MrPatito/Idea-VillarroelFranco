import { set } from 'lodash'
import React, { useEffect, useState } from 'react'
import ItemList from './itemList'

function ItemListContainer(){
    const [products, setProduct] = useState([])

    const urlData = "https://pokeapi.co/api/v2/" 
    const items = [
        {key: '1', nombre: 'dosci', potencia: '200W'},
        {key: '2', nombre: 'treci', potencia: '300W'},
        {key: '3', nombre: 'cuatri', potencia: '400W'},
        {key: '4', nombre: 'ochi', potencia: '800W'},
        {key: '5', nombre: 'milonga', potencia: '1000W'},
    ]

    useEffect(()=>{
        setTimeout(function(){
            setProduct(items)

        fetch(`${urlData}pokemon`)
        .then((response) => response.json())
        .then(data => console.log('data', data))
        .catch((error)=> console.log("error", error));
        }, 2000);
        
    },[])
    


    return(

        <div className='listItemcContainer'>
            <ItemList items={products}/>
        </div>
        
    );
    
    }
    export default ItemListContainer;
    
