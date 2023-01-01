import styled from 'styled-components';

export const CategoryBox = styled.div`
  width: 218px;
  height: 400px;
  margin: 10px 20px 20px 20px;
  border-radius: 16px;
  background-color: #fff;

  /* input {
    border: none;
  } */
`;

export const Title = styled.div`
  cursor: pointer;
  border-radius: 16px 16px 0 0;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${(props) => props.color === 'first' && '#FFFFFF'};
  background-color: ${(props) => (props.color === 'first' ? '#828282' : '#C2C2C2')};
`;
