import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  margin: 5% 0;
  width: 45vw;
`;

export const LinkButton = styled(Link)`
  display: flex;
  width: 200px;
  height: 50px;
  margin: 10px 0;
  border-radius: 5px;
  background-color: #F74700;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  justify-content: center;
  align-items: center;

  :hover {
    transition: 0.3s;
    background-color: #677662;
  }
`;