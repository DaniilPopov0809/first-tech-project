import styled from "@emotion/styled";

export const Header = styled.header`
background-color: #5d0594;
box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.4);
`; 

export const Container = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
  min-width: 320px;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const Main = styled.main`
background-color: rgba(248, 236, 255, 0.575);

`;

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const Footer = styled.footer`
background-color: #5d0594;
box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.4);
`;

export const FooterWrappper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

export const Copyright = styled.p`
  margin-bottom: 5px;
  color: #373737;
  font-size: 20px;
  font-weight: 600;
`;

export const MailLink = styled.a`
  display: block;
  color: #373737;
  font-size: 18px;
  font-weight: 600;


  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    color: #fff;
  }
`;

