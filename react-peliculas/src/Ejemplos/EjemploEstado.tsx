

//import styles from './App.module.css'
import { useState } from 'react';
import Cabecera from './Cabecera';
import MostrarTexto from './MostrarTexto';

export default function EjemploEstado() {

  // const subtitulo = "Esta es una variable con otro texto";
  // const imageURL = '/vite.svg';

  //const duplicar = (valor: number) => valor * 2;

  // const cuadradoRojo = {
  //   backgroundColor: 'red',
  //   width: '50px',
  //   height: '50px',
  //   marginLeft: '1rem'
  // }

  console.log('Renderizando EjemploEstado');

  const [texto, setTexto] = useState('');
  let texto2 = '';

  console.log('Texto2:', texto2);

  const manejarClick = () => {
    alert('Me haz clickeado')
  }

  const manjearKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    texto2 = e.currentTarget.value;
    setTexto(e.currentTarget.value);
  }
  return (
    <>
      <Cabecera />
      {/* <h1 className="rojo" onClick={() => alert('Me haz clickeado')}>Hola mundo</h1> */}
      {/* <div style={cuadradoRojo}></div>
      <h2 className={styles.color}>{subtitulo.toUpperCase()}</h2>
      <h4>El doble de 5 es {duplicar(5)}</h4>
      <img src={imageURL} alt="logo vite" /> */}

      <button onClick={manejarClick}>Click me</button>
      <div>
        <input onKeyUp={(e) =>manjearKeyUp(e)}/>
      </div>
      
      <MostrarTexto texto={texto} />

    </>
  );
}
