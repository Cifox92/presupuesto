import React, {useState} from 'react'
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'


function App() {

  const [presupuesto, guardarPresupuesto] = useState(0)
  const [restante, guardarRestante] = useState(0)
  const [mostrarPregunta, actualizarPregunta] = useState(true)
  const [gastos, guardarGastos] = useState([])

  const agregarNuevoGasto = gasto => {
    guardarGastos([...gastos, gasto])
  }

  return (
    <div className='container'>
      <header>
        <h1>Gasto Semanal</h1>

        <div className='contenido-principal contenido'>

          { mostrarPregunta ? (
            <Pregunta guardarPresupuesto={guardarPresupuesto} guardarRestante={guardarRestante} actualizarPregunta={actualizarPregunta} />
            ) : (
            <div className='row'>
              <div className='one-half column'>
                <Formulario agregarNuevoGasto={agregarNuevoGasto} />
              </div>

              <div className='one-half column'>
              
              </div>
            </div>
            ) }
            
        </div>

      </header>
    </div>
  )
}

export default App