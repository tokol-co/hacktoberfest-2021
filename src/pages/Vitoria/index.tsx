import React from 'react';
import Header from '../../components/Header';

import {
  Container,
  ProfileImg,
  Title,
  Subtitle,
  Content
} from './styles';

const Vitoria = () => {
  return (
    <Container>
      <Header />
      <ProfileImg> 
        <img src="https://avatars.githubusercontent.com/u/47597666?s=400&u=bd9fbb4223cfc244dfc510372a49d22df50d4c66&v=4" alt="Vitoria photo" />
      </ProfileImg>
      <Title href="https://github.com/VitoriaVidal" target="_blank"> Vitória Vidal</Title>
      <Subtitle>Web developer apprendice | Node.js and React.js</Subtitle>
      <Content>
        <p>Hello world 👋 </p>
        <p>I'm a semi-graduated girl, looking for an internship so I can really graduate in Information Technology Management.</p>
        <p>Every day, I've been learning to code in NodeJS and ReactJS, with the help mainly of my friends and Rocketseat.</p>
        <p>Meu objetivo é continuar estudando e codificando para sair de uma simples aprendiz de desenvolvedor web para virar uma desenvolvedora web.</p>
        <p>Seja bem-vindo e vamos codificar e aprender juntos ✨ </p>
      </Content>
    
    </Container>
  )
}

export default Vitoria;