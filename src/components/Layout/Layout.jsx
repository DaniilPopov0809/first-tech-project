import { RotatingLines } from "react-loader-spinner";
import {
  Container,
  Centered,
  Header,
  Main,
  Footer,
  FooterWrappper,
  Copyright,
  MailLink,
} from "./Layout.styled";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import AppBarMenu from "../AppBar/AppBar";

const Layout = () => {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowFallback(true);
    }, 250);
  }, []);

  return (
    <>
      <Header>
        <Container>
          <AppBarMenu />
        </Container>
      </Header>
      <Main>
        <Container>
          <Suspense
            fallback={
              showFallback && (
                <Centered>
                  <RotatingLines
                    strokeColor="#ebd8ff"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                  />
                </Centered>
              )
            }
          >
            <Outlet />
          </Suspense>
        </Container>
      </Main>
      <Footer>
        <Container>
          <FooterWrappper>
            <Copyright>©2023 Daniil Popov</Copyright>
            <MailLink href="mailto:x6uhrox@gmail.com">
              x6uhrox@gmail.com
            </MailLink>
          </FooterWrappper>
        </Container>
      </Footer>
    </>
  );
};

export default Layout;
