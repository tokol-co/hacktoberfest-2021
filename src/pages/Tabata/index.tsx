import Header from '../../components/Header';

import {
  Container,
  ProfileImg,
  Title,
} from './styles';

const Tabata = () => {
  return (
    <Container>
      <Header />
      <ProfileImg src="https://avatars.githubusercontent.com/u/43206830?v=4" alt="Tábata's photo" />
      <Title href="https://github.com/tabaesso" target="_blank">Tábata Baesso</Title>
    </Container>
  )
}

export default Tabata;