import styled from "@emotion/styled";

export const Header = styled.header`
  background-color: var(--bar-color);
  box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.4);
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
  background-color: var(--body-color);
`;

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const Footer = styled.footer`
  background-color: var(--bar-color);
  box-shadow: 0px -2px 2px rgba(0, 0, 0, 0.4);
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
  color: var(--text-color);
  font-size: 20px;
  font-weight: 600;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
`;

export const MailLink = styled.a`
  display: block;
  color: var(--text-color);
  font-size: 18px;
  font-weight: 600;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    color: var(--secondary-text-color);
  }
`;
