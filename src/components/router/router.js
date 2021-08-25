import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../home';
import NavBar from '../NavBar/navBar';
import ItemListContainer from '../itemList/itemListContainer';


const Router = ()=>{
    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                
                <Route exact path="/" component={Home}/>
                <Route path="/category/:Id" component={ItemListContainer}/>
                <Route path="*" component={NavBar}/>
            </Switch>
        </BrowserRouter>
        
    )
}

export default Router;