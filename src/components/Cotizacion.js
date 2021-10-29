import React from "react";
import styled from "@emotion/styled";

const ResultadoDiv = styled.div`
  color: #fff;
`;

const Precio = styled.p`
  font-size: 2rem;

  span {
    font-weight: bold;
  }
`;

const Info = styled.p`
  font-size: 1.2rem;
  span {
    font-weight: bold;
  }
`;

const Cotizacion = ({ resultado }) => {
  if (Object.keys(resultado).length === 0) return null;

  console.log(resultado);

  return (
    <ResultadoDiv>
      <Precio>
        El precio es:{" "}
        <span>
          {resultado.TOSYMBOL} {resultado.PRICE}{" "}
        </span>{" "}
      </Precio>
      <Info>
        Precio más alto del día:{" "}
        <span>
          {resultado.TOSYMBOL} {resultado.HIGHDAY}
        </span>{" "}
      </Info>
      <Info>
        Precio más bajo del día:{" "}
        <span>
          {resultado.TOSYMBOL} {resultado.LOWDAY}
        </span>{" "}
      </Info>
      <Info>
        Variación últimas 24 horas:{" "}
        <span>
          {resultado.TOSYMBOL} {resultado.CHANGEPCT24HOUR}
        </span>{" "}
      </Info>
      <Info>
        Última actualización: <span> {resultado.LASTUPDATE}</span>{" "}
      </Info>
    </ResultadoDiv>
  );
};

export default Cotizacion;
