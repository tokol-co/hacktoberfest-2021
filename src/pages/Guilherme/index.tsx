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
      <ProfileImg src="https://avatars.githubusercontent.com/u/47790486?v=4" alt="Guilherme's photo" />
      <h2>
        Guilherme Santos
      </h2>
    </Container>
  )
}

export default Guilherme;