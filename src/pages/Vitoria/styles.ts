import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfileImg = styled.head`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

img {
  width: 200px;
  border-radius: 100px;
  -webkit-box-shadow: -10px 10px 0px 0px #F74700, 10px -10px 0px 0px #677662; 
  box-shadow: -10px 10px 0px 0px #F74700, 10px -10px 0px 0px #677662;
}

a {
  margin-top: 10px;
  color: #FFFFFF;
  text-decoration: none;
  font-size: 26pt;
  font-weight: bold;

  transition: all .2s;

  &:hover {
    color: #677662;
  }
}
`;

export const Title = styled.a`
  margin: 10px 0;
  font-size: 1.8rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;

  :hover {
    transition: 0.3s;
    color: #677662;
  }
`;

export const Subtitle = styled.div`
  margin: 10px 0;
  font-size: 1.1rem;
  color: #F74700;
`;

export const Content = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
  width: 500px;
  padding: 20px;

  h2 {
    margin: 10px 0;
  }

  p {
    margin: 5px 0;
  }


`;