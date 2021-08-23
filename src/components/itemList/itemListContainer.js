import React, { useEffect, useState } from 'react'
import ItemList from './itemList'

function ItemListContainer(){
    const [products, setProduct] = useState([])

    const items = [
        {key: '1', nombre: 'dosci', potoencia: '200W'},
        {key: '2', nombre: 'treci', potoencia: '300W'},
        {key: '3', nombre: 'cuatri', potoencia: '400W'},
        {key: '4', nombre: 'ochi', potoencia: '800W'},
    ]

    useEffect(()=>{
        setTimeout(()=>{
            setProduct(items)
        },2000)
    },[])
    


    return(

        <div className='listItemcContainer'>
            <ItemList items={products}/>
        </div>
        
    );
    
    }
    export default ItemListContainer;
    
