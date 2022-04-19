import React, { Component } from 'react'
import Hijo from './Hijo';

export class Padre extends Component {

    constructor(props) {
        super(props);
        console.log('Se ejecuta el constructor del padre');
        this.state = {
            mensaje: 'Bienvenidos',
            cantidad: 0
        }
    }

    componentDidMount() { // Hook que se ejecuta una vez tras renderizarse el componente en el DOM
        console.log('Se ejecuta el componentDidMount del padre');
        setTimeout(() => {
            this.setState({mensaje: '¿Qué tal?'})
        }, 3000)
    }

    componentDidUpdate() { // Hook que se ejecuta cada vez que hay actualizaciones
        console.log('Se ejecuta el componentDidUpdate del padre');
    }

    handleCantidad = (cantidad) => {
        // this.setState({cantidad: this.state.cantidad += cantidad}); Si provoca error o warning usar el formato de
                                                                    // updater en callback
        this.setState(prevState => {
            return {cantidad: prevState.cantidad += cantidad}
        })
        // También se puede escribir como
        // this.setState(prevState => ({cantidad: prevState.cantidad += cantidad}))
    }

    render() {
        console.log('Se ejecuta el render del padre')
        return (
            <>
                <h1>Padre</h1>
                <p>{this.state.mensaje}</p>
                <p>Cantidad: {this.state.cantidad}</p>
                <Hijo mensaje={this.state.mensaje} handleCantidad={this.handleCantidad} />
            </>
        )
    }
}

export default Padre