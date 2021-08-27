import React from 'react'
import Ditail from './detail'




const ItemDetail = ({ability}) => {
    return(

                <div>
                        {ability.map((abilidad)=> <Ditail {...abilidad}/>)}
                </div>
            
        
        
    );
    
    }
    export default ItemDetail;
    
