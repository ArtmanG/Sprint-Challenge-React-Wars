import React, { useEffects, useState } from 'react';

const CharacterCard = props => {
    return (
        <div className='character-list' key={props.id}>
            <h2>{props.name}</h2>
            <div className='bottom'>
                <p>Birth Year: {props.birth_year}</p>
                <p>Species: {props.species}</p>
                <p>Gender: {props.gender}</p>
                <p>Homeworld: {props.homeworld}</p>
                <p>Height: {props.height}</p>
                <p>Mass: {props.mass}</p>
                <p>Hair Color: {props.hair_color}</p>
                <p>Skin Color: {props.skin_color}</p>
                <p>EyeColor: {props.eye_color}</p>
                <p>Vehicles: {props.vehicles}</p>
                <p>Starships: {props.starships}</p>
                <p>Film Appearances: {props.films}</p>
            </div>
        </div>
    )
}

export default CharacterCard