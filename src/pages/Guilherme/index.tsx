import Header from '../../components/Header';

import {
  Container,
  ProfileImg,
  Title,
  Subtitle,
  Content,
} from './styles';

const Guilherme = () => {
  return (
    <Container>
      <Header />
      <Title href="https://github.com/yu-gui-oh" target="_blank">
        <ProfileImg src="https://avatars.githubusercontent.com/u/47790486?v=4" alt="Guilherme's photo" />
      </Title>
      <Title href="https://github.com/yu-gui-oh" target="_blank">
        Guilherme Santos
      </Title>
      <Subtitle>
        Web developer | Node.js, React.js and React Native
      </Subtitle>
    </Container>
  )
}

export default Guilherme;