import { Container } from "./Layout.styled";
import { NavLink } from "react-router-dom";
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
return (
    <Container>
    <header>
     <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/tweets">Tweets</NavLink></li>
        </ul>
     </nav>
    </header>
    <main>
    <Outlet />
      {/* <Suspense
        fallback={
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        }
      >
        <Outlet />
      </Suspense> */}
    </main>
    <footer>
      {/* <FooterWrappper>
        <Copyright>©2023 Daniil Popov</Copyright>
        <MailLink href="mailto:x6uhrox@gmail.com">x6uhrox@gmail.com</MailLink>
      </FooterWrappper> */}
    </footer>
  </Container>
)
}

export default Layout;