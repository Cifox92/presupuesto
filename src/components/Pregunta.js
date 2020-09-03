import React, {useState} from 'react'
import Error from './Error'

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

    const [cantidad, guardarCantidad] = useState(0)
    const [error, guardarError] = useState(false)

    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value))
    }

    const agregarPresupuesto = e => {
        e.preventDefault()

        //Validación
        if(cantidad < 1 || isNaN(cantidad)) {
            guardarError(true)
            return
        }

        //si se pasa la validación
        guardarError(false)
        guardarPresupuesto(cantidad)
        guardarRestante(cantidad)
        actualizarPregunta(false)
    }

    return (
        <>
            <h2>Coloca tu presupuesto</h2>

            { error ? <Error mensaje='El presupuesto es incorrecto' /> : null }

            <form onSubmit={agregarPresupuesto}>
                <input type='number' className='u-full-width' placeholder='Coloca tu presupuesto' onChange={definirPresupuesto} />

                <input type='submit' className='button-primary u-full-width' value='Definir Presupuesto' />
            </form>
        </>
    )
}
 
export default Pregunta