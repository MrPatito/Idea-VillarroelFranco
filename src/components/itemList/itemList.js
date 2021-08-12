import React from 'react'
import Counter from './itemCount/itemCount'


const ItemList = ({items}) => {





return(
    <div className='listItem'>
        {items.map((item) => <Counter {...item} />)}
    </div>
    
);

}
export default ItemList;
