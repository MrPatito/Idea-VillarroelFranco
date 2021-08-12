
import React from 'react';
import Counter from './components/itemCount/itemCount';
import ItemList from './components/itemList/itemList';
import NavBar from './components/NavBar/navBar';
import './components/NavBar/navBar.css';


class App extends React.Component{

    render() {
        return(
            <div className='grilla'>
               <NavBar/>
               <ItemList>
                    <Counter/>
               </ItemList>
            </div>
            
        );

       
    }
        
        
    

}

export default App;
