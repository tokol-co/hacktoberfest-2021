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
  border: 2px solid #F74700;
  border-radius: 50%;
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