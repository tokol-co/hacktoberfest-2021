import React from 'react';
import Header from '../../components/Header';

import {
  Container,
  ProfileImg,
  Title,
  Subtitle,
} from './styles';

const Vitoria = () => {
  return (
    <Container>
      <Header />
      <ProfileImg src="https://avatars.githubusercontent.com/u/47597666?s=400&u=bd9fbb4223cfc244dfc510372a49d22df50d4c66&v=4" alt="Tábata's photo" />
      <Title target="_blank">Vitória Vidal</Title>
      <Subtitle>Web developer apprendice| Node.js  React.js</Subtitle>
    
    </Container>
  )
}

export default Vitoria;