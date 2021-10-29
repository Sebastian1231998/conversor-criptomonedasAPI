import React, { useState, Fragment } from "react";
import styled from '@emotion/styled';

const Label = styled.label`

display:block; 
font-size:2rem;
color:#fff; 
text-transform: uppercase;
font-weight: bold;
font-family: 'Bebas neue' , cursive;
margin-top:2rem
`; 

const Select = styled.select`

width: 100%;
border-radius: 5px;
padding:1rem;
font-size:1.2rem;
--webkit-appearance:none; 
margin-bottom:1rem

`; 


const useCriptomoneda = (label, stateInicial, opciones) => {
  const [monedaUsuario, modificarState] = useState(stateInicial);

  const selectCriptomoneda = () => {
    return (
      <Fragment>
        <Label>{label}</Label>

        <Select
        onChange={(e)=> { modificarState(e.target.value) }}
        value={monedaUsuario}
        >
          <option value="">--seleccione--</option>

          {opciones.map((opcion) => (
            <option value={opcion.CoinInfo.Name} key={opcion.CoinInfo.Id}>
              {opcion.CoinInfo.FullName}
            </option>
          ))}
        </Select>
      </Fragment>
    );
  };

  return [monedaUsuario, selectCriptomoneda];
};

export default useCriptomoneda;