import React from "react";
import "../styles/styles.css";

function Pokedex(props) {
  return (
    /*<div className="contenedor-header">
        <p>
        Nombre o número
        <input type="search" name="buscar-pokemon"></input>
        <input type="submit" value="Buscar"></input>
      </p>
      </div>*/
    <div className="contenedor-pokemon">
       <h1>
        <p className="nombre-pokemon">{props.nombre}</p>
      </h1>
      <img
        className="imagen-pokemon"
        src={props.imagen}
        alt={`Foto de ${props.nombre}`}
      />
      <div className="contenedor-descripcion-pokemon">
        <p className="numero-pokemon">
          <strong>N°:</strong> {props.numero}
        </p>
        <p className="tipo-pokemon">
          <strong>Tipo:</strong> {props.tipo}
        </p>
        <p className="habilidad-pokemon">
          <strong>Habilidad:</strong> {props.habilidad}
        </p>
        <p className="debilidad-pokemon">
          <strong>Debilidad:</strong> {props.debilidad}
        </p>
      </div>
    
    </div>
  );
}
export default Pokedex;
