import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Profile = styled.header`
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

export const Section = styled.section`
  width: 500px;
  margin-top: -10px;
  
  header {
    margin-top: 16px;
    text-align: center;

    p {
      font-size: 14pt;
      color: #F74700;
      font-weight: bold;
    }
  }

  article {
    margin-top: 20px;
    text-align: center;

    p {
      margin-bottom: 10px;
      text-align: center;
    }
  }
`

export const Footer = styled.footer`
  margin-top: 10px;
  
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
`;