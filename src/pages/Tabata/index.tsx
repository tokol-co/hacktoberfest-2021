import Header from '../../components/Header';

import {
  Container,
  ProfileImg,
  Title,
  Subtitle,
  Content,
} from './styles';

const Tabata = () => {
  return (
    <Container>
      <Header />
      <ProfileImg src="https://avatars.githubusercontent.com/u/43206830?v=4" alt="Tábata's photo" />
      <Title href="https://github.com/tabaesso" target="_blank">Tábata Baesso</Title>
      <Subtitle>Web developer | Node.js, React.js and React Native</Subtitle>
      <Content>
        <h2>About me</h2>
        <p>
          Currently I study and work with the stack that has conquered the market, React.js,
          Node.js and React Native, all of then with Typescript. It has been an incredible
          experience and as a junior developer I feel that I am deepening my knowledge of
          this technologies.
        </p>
        <p>
          I am passionate about mobile and back-end development, I have already interned
          at National Institute for Space Research and I had the opportunity to work with
          native mobile development on Android (with Java) and iOS (with Swift).
        </p>
        <p>
          I've worked as a web developer using Java for the back-end and Primefaces or
          React.js for the front-end.
        </p>
        <p>Welcome to my profile, I'm available to help you \o/</p>
      </Content>
    </Container>
  )
}

export default Tabata;