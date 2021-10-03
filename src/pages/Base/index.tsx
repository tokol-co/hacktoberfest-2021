import HacktoberfestLogo from '../../assets/logo-hacktoberfest.svg';

import {
  Container,
  Logo,
  LinkButton,
} from './styles';

const Base = () => {
  return (
    <Container>
      <Logo src={HacktoberfestLogo} alt="Hacktoberfest logo" />
      <LinkButton to="/guilherme">Guilherme</LinkButton>
      <LinkButton to="/schuansk">Schuansk</LinkButton>
      <LinkButton to="/tabata">Tábata</LinkButton>
      <LinkButton to="/vitoria">Vitória</LinkButton>
    </Container>
  )
}

export default Base;