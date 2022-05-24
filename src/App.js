import React from 'react';
import './App.css';
import Boton from './Componentes/boton';
import Pantalla from './Componentes/pantalla';
import Clear from './Componentes/clear';
import {useState} from 'react';
import {evaluate} from 'mathjs';


function App() {

  const [input, setInput] = useState('');

  const agregoNumero = val => {
    setInput(input + val);
  }; 

  const calcularResultado = () => {
    if (input) { 
      setInput(evaluate(input));

    } else {
      alert('por favor ingrese valores a operar');

    }
  };





  

  


 
  
  return (
    <div className="App">
      <h1>Calculadora</h1>
      <div className="contenedor-calculadora">
        <Pantalla input={input}/>
        <div className="fila">
          <Boton manejarClick={agregoNumero}>1</Boton>
          <Boton manejarClick={agregoNumero}>2</Boton>
          <Boton manejarClick={agregoNumero}>3</Boton>
          <Boton manejarClick={agregoNumero}>+</Boton>

        </div>
        <div className="fila">
          <Boton manejarClick={agregoNumero}>4</Boton>
          <Boton manejarClick={agregoNumero}>5</Boton>
          <Boton manejarClick={agregoNumero}>6</Boton>
          <Boton manejarClick={agregoNumero}>-</Boton>

        </div>
        <div className="fila">
          <Boton manejarClick={agregoNumero}>7</Boton>
          <Boton manejarClick={agregoNumero}>8</Boton>
          <Boton manejarClick={agregoNumero}>9</Boton>
          <Boton manejarClick={agregoNumero}>*</Boton>


        </div>
        <div className="fila">
          <Boton manejarClick={agregoNumero}>.</Boton>
          <Boton manejarClick={agregoNumero}>0</Boton>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregoNumero}>/</Boton>


        </div>
        <div className="fila">
        <Clear manejarClear = {() => setInput('')}> Clear </Clear>
        </div>
      </div>
    </div>
  );
}

export default App;