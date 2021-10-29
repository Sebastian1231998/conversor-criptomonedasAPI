import React, {useState,useEffect} from 'react';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner'
import styled from '@emotion/styled'; 
import imagen from './cryptomonedas.png'; 

const axios = require('axios');


const ContenedorApp = styled.div`

max-width:900px; 
margin:0 auto; 
margin-top: 10rem;

@media(min-width:992px){


  display:grid;
  grid-template-columns: repeat(2,1fr);
  column-gap:2rem

}

`;  

const ImagenFondo = styled.img`

max-width:100%;
margin-bottom: 10px;

`; 

const Heading = styled.h1`

font-family: 'Bebas neue', cursive;
font-weight: bold;
color:#fff; 
font-size:3rem; 
text-transform: uppercase;
text-align:left;
margin:0

`; 






function App() {



  const[moneda , guardarMoneda] = useState('');
  const[criptomoneda , guardarCriptomoneda] = useState('');
  const[resultado , guardarResultado] = useState({});
  const [cargando, guardarCargando] = useState(false);

  useEffect(() => {
 
    const consultarAPI = async ()=>{
 
      if(moneda === '') return; 


      let url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${moneda}&tsyms=${criptomoneda}`; 
 
      let resultado = await axios.get(url); 

    
      guardarCargando(true);

      setTimeout(()=>{

        guardarCargando(false);
        guardarResultado(resultado.data.DISPLAY[moneda][criptomoneda]);
      },3000)

      

    }

    consultarAPI();


  }, [moneda, criptomoneda])



  const compontente = cargando ? <Spinner />  :       <Cotizacion  resultado={resultado}/> ;  

  return (
       <ContenedorApp>
           
           <div>
            <ImagenFondo
            src={imagen}
            alt="criptomonedas"
            ></ImagenFondo>
           </div>

          <div>
           <Heading>Cotizador de Criptomonedas Al Instante</Heading>

           <Formulario 

             guardarMoneda={guardarMoneda}
             guardarCriptomoneda={guardarCriptomoneda}

           />


       {compontente}
          </div>

       </ContenedorApp>
  );
}

export default App;
