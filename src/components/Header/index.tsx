import BackArrowLogo from '../../assets/back-arrow.svg';

import {
  Container,
  LinkButton,
  BackIcon,
} from './styles';

const Header = () => {
  return (
    <Container>
      <LinkButton to="/">
        <BackIcon src={BackArrowLogo} />
      </LinkButton>
    </Container>
  )
}

export default Header;
