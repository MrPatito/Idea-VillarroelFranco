import React from 'react';

const Detail = (props) => {
    // seguir con la logica de counter con {props.name}
    console.log(props.name);
    return (

        <p>{props.name}</p>

    );
}
export default Detail;