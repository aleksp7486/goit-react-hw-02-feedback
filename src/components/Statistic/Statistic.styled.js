import styled from 'styled-components';

export const Item = styled.li`
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[2]}px;
  }
`;

export const Text = styled.p`
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const Value = styled.span`
  padding-left: ${p => p.theme.space[2]}px;
`;
