import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  margin-top: 40px;
  margin-bottom: 100px;
  @media screen and (min-width: 768px) {
    margin-top: 60px;
    margin-right: -20px;
  }
`;
