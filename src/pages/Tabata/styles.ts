import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfileImg = styled.img`
  margin: 20px 0;
  width: 200px;
  border-radius: 50%;
`;

export const Title = styled.a`
  font-size: 1.8rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;

  :hover {
    transition: 0.3s;
    color: #677662;
  }
`;