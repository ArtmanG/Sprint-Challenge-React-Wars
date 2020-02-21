import React from 'react';
import CharacterList from './components/CharacterList'
import './App.css';
import styled from 'styled-components';

const NewH1 = styled.h1`
font-size: 5rem;
color: black;
drop-shadow: yellow 1px 1px;
margin: 0 0 5%;
padding-top: 3%;
`;


const App = () => {

  return (
    <div className='App'>
      <NewH1>React Wars</NewH1>
      <CharacterList />
    </div>
  );
}

export default App;
