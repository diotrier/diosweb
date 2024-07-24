import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${(props) => props.theme.colors.text_primary};
  line-height: 68px;

  @media ${(props) => props.theme.breakpoints.lg} {
    text-align: center;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;
    z-index: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);

    @media ${(props) => props.theme.breakpoints.lg} {
    padding: 66px 16px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
    padding: 32px 16px;
    }
`

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
   @media ${(props) => props.theme.breakpoints.lg} {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media ${(props) => props.theme.breakpoints.lg} {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${(props) => props.theme.colors.text_primary};
  line-height: 68px;

 @media ${(props) => props.theme.breakpoints.lg} {
    text-align: center;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const SubTitle = styled.div`
font-size: 20px;
line-height: 32px;
margin-bottom: 42px;
color: ${(props) => props.theme.colors.text_primary + 95};

@media ${(props) => props.theme.breakpoints.lg} {
  text-align: center;
}

@media ${(props) => props.theme.breakpoints.lg} {
  font-size: 16px;
  line-height: 32px;
}
`;

export const ResumeButton = styled.a`
-webkit-appearance: button;
-moz-appearance: button;
appearance: button;
text-decoration: none;
cursor:pointer;

width: 95%;
max-width: 300px;
text-align: center;
padding: 16px 0;

background: hsla(271, 100%, 50%, 1);
background: linear-gradient(
  225deg,
  hsla(271, 100%, 50%, 1) 0%,
  hsla(294, 100%, 50%, 1) 100%
);
background: -moz-linear-gradient(
  225deg,
  hsla(271, 100%, 50%, 1) 0%,
  hsla(294, 100%, 50%, 1) 100%
);
background: -webkit-linear-gradient(
  225deg,
  hsla(271, 100%, 50%, 1) 0%,
  hsla(294, 100%, 50%, 1) 100%
);
box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
border-radius: 50px;
font-weight: 600;
font-size: 20px;
transition: 1.2s ease;

   &:hover {
    transform: scale(1.05);
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
  }    
  
  
  @media ${(props) => props.theme.breakpoints.sm} {
      padding: 12px 0;
      font-size: 18px;
  } 
  color: white;
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  @media ${(props) => props.theme.breakpoints.lg} {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
    margin-bottom: 80px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 30px;
  }
`;

export const HeroBg = styled.div`
position: absolute;
display: flex;
justify-content: end;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
max-width: 1360px;
overflow: hidden;
padding: 0 30px;
top: 50%;
left: 50%;
-webkit-transform: translateX(-50%) translateY(-50%);
transform: translateX(-50%) translateY(-50%);

@media ${(props) => props.theme.breakpoints.lg} {
  justify-content: center;
  padding: 0 0px;
}
`;