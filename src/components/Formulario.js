import React , {useState , useEffect} from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
const axios = require('axios');

const Input = styled.input`

width:100%; 
font-weight: bold;
padding:10px;
border-radius: 5px;
border:none; 
font-size:1.2rem; 
background-color: #4dabfd;
color:#ffff;
transition: background-color .3s ease;
font-family: 'Bebas neue', cursive;

&:hover{

    background-color:#0d8af7; 
    cursor:pointer;
}

`; 

const Error = styled.div`

background-color: red;
padding: 1rem 3rem;
color:#fff; 
font-size:1.2rem; 
border-radius: 5px;
text-align: center;
margin-top:2rem;



`;



const Formulario = ({guardarMoneda , guardarCriptomoneda}) => {

     const [datosusuario, actualizarDatos] = useState({}); 

     const [criptomonedas , guardarCriptomonedas ] = useState([]);

    useEffect(()=>{

      const consultarAPI = async ()=>{

        let url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
         
        let resultado = await axios.get(url); 

        
        guardarCriptomonedas(resultado.data.Data)

      }

      consultarAPI();


    },[]) 

    const Monedas = [

        {codigo:'USD' , nombre:'Dolar De Estados Unidos'},
        {codigo:'MXN' , nombre:'Peso Mexicano'},
        {codigo:'EUR' , nombre:'Euro'},
        {codigo:'GBP' , nombre:'Libra Esterlina'},
        {codigo:'COL' , nombre:'Peso Colombiano'}

    ]

    const [monedausuario , SelectMonedas] = useMoneda('Elige Tu Moneda', '', Monedas);
    const [criptomonedausuario , SelectCriptomoneda] = useCriptomoneda('Elige Tu Criptomenda', '', criptomonedas);
    const [error , guardarError ] = useState(false); 



    const handlerSubmit = (e)=>{

        e.preventDefault();


        //validar
        if(monedausuario === '' || criptomonedausuario === ''){
            guardarError(true);
            return; 

        }

        guardarError(false);

        guardarMoneda(monedausuario);
        guardarCriptomoneda(criptomonedausuario);

 

    }
    return ( 

       <form
       onSubmit={handlerSubmit}
       >

       {error ? <Error>Todos los campos son obligatorios</Error> : null}
 
       <SelectMonedas />

       <SelectCriptomoneda />

       <Input 
           type="submit"
           value="Calcular"

       />
       </form>

     );
}
 
export default Formulario;