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
    border: 2px solid #F74700;
  }

  a {
    margin-top: 10px;
    color: #FFFFFF;
    text-decoration: none;
    font-size: 26pt;
    font-weight: bold;

    transition: all .2s;

    &:hover {
      color: #F74700;
    }
  }
`;
