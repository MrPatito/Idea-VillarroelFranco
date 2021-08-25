import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './itemList'

function ItemListContainer(){
    const [products, setProduct] = useState([])
    
    
    const {id} = useParams();
    console.log('categoryid', id)
    
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
           

        }, 2000);
        
    },[])
   

    return(

        <div className='listItemcContainer'>
            <ItemList items={products}/>
        </div>
        
    );
    
    }
    export default ItemListContainer;
    
