import React from 'react'
import { useHistory } from 'react-router-dom'

const Home = () =>{
    const history = useHistory();

    const id = 152
    const pagar = () => history.push(`/category/${id}`);

    return(
        <div className='listItemcContainer'>
            <h1>Hola. Soy un HOME</h1>
            <button onClick={pagar}>pagar</button>
        </div>
    )
}

export default Home