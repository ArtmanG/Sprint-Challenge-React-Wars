import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import CharacterCard from './CharacterCard';


const CharacterList = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        Axios
          .get('https://swapi.co/api/people/')
          .then(response => {
            console.log(response);
            setCharacters(response);
          })
          .catch(error => {
            console.log('Error:', error);
          });
      }, []);

    return (
        <div className='character'>
            {characters.map(character => {
                return (
                   <CharacterCard
                   
                   /> 
                );
            })}
        </div>
    )





}

export default CharacterList