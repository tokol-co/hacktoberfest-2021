import Header from '../../components/Header';

import {
  Container,
  ProfileImg,
  Title,
  Subtitle,
} from './styles';

const Tabata = () => {
  return (
    <Container>
      <Header />
      <ProfileImg src="https://avatars.githubusercontent.com/u/43206830?v=4" alt="Tábata's photo" />
      <Title href="https://github.com/tabaesso" target="_blank">Tábata Baesso</Title>
      <Subtitle>Web developer | Node.js, React.js and React Native</Subtitle>
    </Container>
  )
}

export default Tabata;