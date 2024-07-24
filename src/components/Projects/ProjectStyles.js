import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  margin-top: 50px;
  padding: 0px 16px;
  position: rlative;
  z-index: 1;
  align-items: center;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media ${(props) => props.theme.breakpoints.lg}{
    flex-direction: column;
  }
`;
export const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${(props) => props.theme.color.text_primary};
  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 12px;
    font-size: 32px;
  }
`;
export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text_secondary};
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
  }
`;

export const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${(props) => props.theme.primary};
  color: ${(props) => props.theme.colors.primary};
  font-size: 16px;
  border-radius: 12px;
font-weight 500;
margin: 22px 0;
@media ${(props) => props.theme.breakpoints.md}{
    font-size: 12px;
}
`;
export const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.colors.primary + 20};
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 6px 8px;
    border-radius: 4px;
  }
  ${({ active, theme }) =>
        active &&
        `
  background:  ${theme.primary + 20};
  `}
`;
export const Divider = styled.div`
  width: 1.5px;
  background: ${(props) => props.theme.colors.primary};
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;
