import React from 'react';
import Header from '../../components/Header';
import Truman from '../../assets/truman.gif';

import {
  Container,
  ProfileImg,
  Title,
  Subtitle,
  Content,
} from './styles';

const Guilherme = () => {
  const [easterEgg, SetEasterEgg] = React.useState(false);
  return (
    <Container>
      <Header />
      <Title href="https://github.com/yu-gui-oh" target="_blank">
        {
          easterEgg === false ?
            <ProfileImg src="https://avatars.githubusercontent.com/u/47790486?v=4" alt="Guilherme's photo" />
          :
            <ProfileImg src={Truman} alt="Thank you" />
        }
      </Title>
      <Title href="https://github.com/yu-gui-oh" target="_blank">
        Guilherme Santos
      </Title>
      <Subtitle>
        Web developer | Node.js, React.js and React Native
      </Subtitle>
      <Content>
        <h2>About me</h2>
        <p>
          Trying to learn something new and to get better every day. I started studying React.js,
          Node.js and React Native at college, where I recently finished my course in IT Management.
        </p>
        <p>
          With the help of <a href="https://www.rocketseat.com.br" target="_blank">Rocketseat</a>, I 
          managed to learn many things from these three topics, which helped me a lot during my team's 
          projects.     
        </p>
        <p>
          Gaming is my passion, and programming is something I'm kind of good at, so my personal goal 
          is to one day learn more about game development and create a game of my own. I hope to get there
          someday.
        </p>
        <Subtitle onClick={() => SetEasterEgg(true)}>
          "Good morning, and in case I don't see ya, good afternoon, good evening, and good night." - Truman Burbank
        </Subtitle>
      </Content>
    </Container>
  )
}

export default Guilherme;