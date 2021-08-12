
import React from 'react';
import ItemList from './components/itemList/itemList';
import NavBar from './components/NavBar/navBar';
import './components/NavBar/navBar.css';


class App extends React.Component{

    render() {
        return(
            <div className='grilla'>
               <NavBar/>
               <ItemList/>
            </div>
            
        );

       
    }
        
        
    

}

export default App;
