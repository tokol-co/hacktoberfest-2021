import React from 'react';

import Header from '../../components/Header';

import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';

import {
  Container,
  Profile,
  Section,
  Footer,
} from './style';

const Schuansk = () => {
  return (
    <Container>
      <Header />
      <Profile>
        <img src="https://avatars.githubusercontent.com/u/11741138?s=400&u=2d6824fb3b0b8fae51e8738f5d29828069712b66&v=4" alt="Schuansk photo" />
        <a href="https://github.com/schuansk" target="_blank">Schuansk Torres</a>
      </Profile>
      <main>
        <Section>
          <header>
            <p>Web developer | NodeJS | ReactJS </p>
          </header>
          <article>
            <p>Hi, I'm a little grasshopper that seeks new knowledge every day.</p>
            <p>I'm currently a junior developer working mainly with NodeJS and ReactJS, but I'm taking my first steps in Python, PHP and Java (Android).</p>
            <p>I think no matter what our pace, what we can't do is stop, so we're going to keep coding and improving every day.</p>
            <p>Let's go 🚀.</p>
          </article>
        </Section>
      </main>
      <Footer>
        <ul>
          <li>
            <a href="https://github.com/schuansk" target="_blank">
              <img src={Github} alt="Github" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/schuansk/" target="_blank">
              <img src={Instagram} alt="Instagram" />
            </a>
          </li>
        </ul>
      </Footer>
    </Container>
  )
}

export default Schuansk;