import React from 'react';
import styled from 'styled-components';

const Cards = styled.div`
width: 40%;
margin: 0 auto;
`;

const CharacterName = styled.div`
font-size: 2rem;
color: yellow;
`;

const NewH2 = styled.h2`
margin-bottom: 0;
`;

const NamePlate = styled.div` 
background-color: black;
opacity: 60%;
`;

const DescPlate = styled.div`
background-color: white;
opacity: 60%
`;

const Descriptions = styled.div`
font-size: 1rem;
`;

const CharacterCard = props => {
    return (
            <Cards key={props.id}>
                <NamePlate>
                    <CharacterName>
                        <NewH2>{props.name}</NewH2>
                    </CharacterName>
                </NamePlate>
                <DescPlate>
                    <Descriptions>
                        <p>Birth Year: {props.birth_year}</p>
                        {/* <p>Species: {props.species}</p> */}
                        <p>Gender: {props.gender}</p>
                        {/* <p>Homeworld: {props.homeworld}</p> */}
                        <p>Height: {props.height}</p>
                        <p>Mass: {props.mass}</p>
                        <p>Hair Color: {props.hair_color}</p>
                        <p>Skin Color: {props.skin_color}</p>
                        <p>Eye Color: {props.eye_color}</p>
                        {/* <p>Vehicles: {props.vehicles}</p>
                        <p>Starships: {props.starships}</p>
                        <p>Film Appearances: {props.films}</p> */}
                    </Descriptions>
                </DescPlate>
            </Cards>
    )
}

export default CharacterCard