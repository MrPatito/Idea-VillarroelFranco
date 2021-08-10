
import React from 'react';
import Counter from './components/itemCount/itemCount';
import NavBar from './components/NavBar/navBar';



class App extends React.Component{

    render() {
        return(
            <div className='grilla'>
               <NavBar/> 
               <Counter/>
            </div>
            
        );

       
    }
        
        
    

}

export default App;
