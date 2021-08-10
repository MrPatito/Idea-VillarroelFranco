import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: 0};
        this.buttonClicked = this.buttonClicked.bind(this)

        this.buttonClicked1 = this.buttonClicked1.bind(this)
    }

    buttonClicked(event){
        this.setState({value: this.state.value+1})
    }
    buttonClicked1(event){
        this.setState({value: this.state.value-1})
    }

    render(){
        return(
                        <div className='container'>
                            <p className='heading'>Contador</p>
                            <p className='counter'>{this.state.value}</p>
                            <button onClick={this.buttonClicked} className='botonContador' id='incr'>+</button>
                            <button onClick={this.buttonClicked1} className='botonContador' id='decr'>-</button>
                        </div>
                        
                    );
    }
}

export default Counter;

// const Counter = (props) =>{
//     return(
//             <div className='container'>
//                 <p className='heading'>Contador</p>
//                 <p className='counter'>0</p>
//                 <button  className='botonContador' id='incr'>+</button>
//                 <button  className='botonContador' id='decr'>-</button>
//             </div>
            
//         );
        
// }
// export default Counter;
