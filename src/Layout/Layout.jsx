import { RotatingLines } from  'react-loader-spinner'
import { Container, Centered } from "./Layout.styled";
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
    
      <Suspense
        fallback={
            <Centered>
            <RotatingLines
            strokeColor="#ebd8ff"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
          </Centered>
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
)
}

export default Layout;