import { RotatingLines } from "react-loader-spinner";
import { Container, Centered } from "./Layout.styled";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import  NavigationMenu  from "../components/NavigationMenu/NavigationMenu";
const Layout = () => {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowFallback(true);
    }, 250);
  }, []);

  return (
    <Container>
      <header>
        <nav>
          <NavigationMenu />
        </nav>
      </header>
      <main>
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
      </main>
      <footer>
        {/* <FooterWrappper>
        <Copyright>©2023 Daniil Popov</Copyright>
        <MailLink href="mailto:x6uhrox@gmail.com">x6uhrox@gmail.com</MailLink>
      </FooterWrappper> */}
      </footer>
    </Container>
  );
};

export default Layout;
