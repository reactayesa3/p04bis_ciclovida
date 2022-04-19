import React, { Component } from 'react'

export class Hijo extends Component {

    constructor(props) {
        super(props);
        console.log('Se ejecuta el constructor del hijo');
    }

    componentDidMount() {
        console.log('Se ejecuta el componentDidMount del hijo');
    }

    componentDidUpdate() {
        console.log('Se ejecuta el componentDidUpdate del hijo');
    }


    render() {
        console.log('Se ejecuta el render del hijo');
        return (
            <>
                <h1>Hijo</h1>
                <p>{this.props.mensaje}</p>
                <button onClick={() => this.props.handleCantidad(1)}>+</button>
                <button onClick={() => this.props.handleCantidad(-1)}>-</button>
            </>
            
        )
    }
}

export default Hijo