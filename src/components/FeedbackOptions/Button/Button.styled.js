import styled from 'styled-components';

export const Btn = styled.button`
  padding: 10px 20px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.white};
  text-transform: capitalize;
  background-color: ${p => p.theme.colors.primary};
  /* border: ${p => p.theme.borders.double}; */
  border-color: ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  :hover {
    background-color: ${p => p.theme.colors.accent};
  }
  :active {
    background-color: ${p => p.theme.colors.secondary};
  }
`;
