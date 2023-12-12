import React from 'react';

function Pokedex() {
    return(
        <div className='contenedor-pokemon'>
            <img 
                className='imagen-pokemon'
                src={requiere('https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png')}
                alt='Foto charizard' />
        <div className='contenedor-descripcion-pokemon'>
            <p className='nombre-pokemon'>Charizard</p>
            <p className='numero-pokemon'>6</p>
            <p className='tipo-pokemon'>Fuego</p>
            <p className='habilidad-pokemon'>Mar llamas</p>

        </div>        

        </div>
    )
}