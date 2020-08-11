import React from 'react';
import './App.css';

import { FormControl } from 'react-bootstrap'

function App() {
  // useState gibt uns eine funktion (hier setzeEingabe)
  // mit der man den State (hier eingabe) aendern kann
  // wenn setzeEingabe aufgeufen wird weiss react automatisch:
  //   es hat sich etwas geandert
  //   und die komponente wird neu dargestellt
  const [eingabe,setzeEingabe] = React.useState('');
  // jedes mal wenn die komponente neu dargestellt wird,
  // geben wir den aktuellen wert von eingabe in der konsole aus
  console.log('=>value',eingabe);
  // - eingabe wird in das value-attribut unserer FormControl (oder input) geschrieben.
  // - onChange wird bei jeder aenderung in dem FormControl (oder input) abgefeuert
  //   => in e.target.value steht der neue inhalt der FormControl
  //   => mit setzeEingabe wird der werd von 'eingabe' geandert.
  //   => react weiss jetzt das die komponente neu dargestellt werden muss, der kreis schliesst sich.
  return (
  <div className="App">
    <FormControl value={eingabe} onChange={ event => {
      console.log('value=>',event.target.value);
      setzeEingabe(event.target.value)
    }} />
  </div> );
}

export default App;