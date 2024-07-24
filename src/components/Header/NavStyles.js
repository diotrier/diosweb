import styled from 'styled-components';


export const Nav = styled.div`
  background-color: ${(props) => props.theme.colors.background1};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;

export const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;
// export const NavLogo = styled.link`
//   width: 80%;
//   padding: 0 6px;
//   font-weight: 500;
//   font-size: 18px;
//   text-decoration: none;
//   color: inherit;
// `;

export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.75);
  font-weight: 500;
  font-size:1.4rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
   &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
   @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
   @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

// export const GithubButton = styled.a`
//   border: 1px solid ${({ theme }) => theme.primary};
//   color: ${({ theme }) => theme.primary};
//   justify-content: center;
//   display: flex;
//   align-items: center;
//   border-radius: 20px;
//   cursor: pointer;
//   padding: 10px 20px;
//   font-size: 16px;
//   font-weight: 500;
//   transition: all 0.6s ease-in-out;
//   text-decoration: none;
//   &:hover {
//     background: ${({ theme }) => theme.primary};
//     color: ${({ theme }) => theme.text_primary};
//   }
// `;

export const MobileIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: #F2F3F4;
  display: none;
   @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
  }
`;

export const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${(props) => props.theme.colors.card_light + 99};
  position: absolute;
  top: 80px;
  right: 0;

  transition: all 1s ease-in-out;
  transform: ${({ isOpen }) =>
        isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

export const Icon = styled.div`
  display:flex
`