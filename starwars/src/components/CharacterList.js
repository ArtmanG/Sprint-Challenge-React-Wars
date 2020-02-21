import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import CharacterCard from './CharacterCard';
// import styled from 'styled-components';




const CharacterList = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        Axios
          .get('https://swapi.co/api/people/')
          .then(response => {
            console.log(response.data.results);
            setCharacters(response.data.results);
          })
          .catch(error => {
            console.log('Error:', error);
          });
      }, []);

    return (
        <div className='character'>
            {characters.map((character, index) => {
                return (
                <CharacterCard
                        key={index}
                        name={character.name}
                        birth_year={character.birth_year}
                        gender={character.gender}
                        height={character.height}
                        mass={character.mass}
                        hair_color={character.hair_color}
                        skin_color={character.skin_color}
                        eye_color={character.eye_color}
                /> 
                );
            })}
        </div>
    )
}

export default CharacterList