import Header from '../../components/Header';

import {
  Container,
  ProfileImg,
} from './styles';

const Tabata = () => {
  return (
    <Container>
      <Header />
      <ProfileImg src="https://avatars.githubusercontent.com/u/43206830?v=4" alt="Tábata's photo" />
      <h2>
        Tábata
      </h2>
    </Container>
  )
}

export default Tabata;