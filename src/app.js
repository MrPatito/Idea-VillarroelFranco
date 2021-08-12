
import React from 'react';

import ItemListContainer from './components/itemList/itemListContainer';
import NavBar from './components/NavBar/navBar';
import './components/NavBar/navBar.css';


class App extends React.Component{

    render() {
        return(
            <div className='grilla'>
               <NavBar/>
               <ItemListContainer/>
            </div>
            
        );

       
    }
        
        
    

}

export default App;
