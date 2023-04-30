import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll/modules";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavLinksOutside,
} from "./NavbarElements";

const Navbar = (props) => {
  const [scrollNav, setScrollNav] = useState(false);
  const location = useLocation();

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  let content;
  if (localStorage.getItem("loggedIn") === "true") {
    
    const role = localStorage.getItem("role");
    let menu;
    
    if (role === "admin") {
      menu =
      
        <React.Fragment>
          <NavItem>
            <NavLinksOutside to="/user" >
              Pracownicy
            </NavLinksOutside>
          </NavItem>
          <NavItem>
            <NavLinksOutside to="/role" >
              Role
            </NavLinksOutside>
          </NavItem>
          <NavItem>
            <NavLinksOutside to="/sex" >
              Płci
            </NavLinksOutside>
          </NavItem>
          <NavItem>
            <NavLinksOutside to="/target" >
              Firmy
            </NavLinksOutside>
          </NavItem>
          <NavItem>
            <NavLinksOutside to="/department" >
              Współpraca
            </NavLinksOutside>
          </NavItem>
          <NavItem>
            <NavLinksOutside to="/schedule" >
              Plan pracy
            </NavLinksOutside>
          </NavItem>
          <NavItem>
            <NavLinksOutside to="/change-password" >
              Zmień hasło
            </NavLinksOutside>
          </NavItem>
        </React.Fragment>;
    } else if (role === "leader") {
      menu =
        <React.Fragment>
          <NavItem>
            <NavLinksOutside to="/schedule" >
              Zarządzaj planem pracy
            </NavLinksOutside>
          </NavItem>
        
          <NavItem>
            <NavLinksOutside to="/change-password" >
              Zmień hasło
            </NavLinksOutside>
          </NavItem>
        </React.Fragment>;
    } else if (role === "common") {
      menu =
        <React.Fragment>
        <NavItem>
          <NavLinksOutside to="/activity" >
            Dodaj zrealizowane zadanie
          </NavLinksOutside>
        </NavItem>
        <NavItem>
            <NavLinksOutside to="/list" >
              Moje zrealizowane zadania
            </NavLinksOutside>
          </NavItem>
          <NavItem>
            <NavLinksOutside to="/change-password" >
              Zmień hasło
            </NavLinksOutside>
          </NavItem>
        </React.Fragment>;
    }
    content = <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to="/" onClick={toggleHome} sx={{ color: "#ffffff" }}>
          ✅fasttasking
        </NavLogo>
        <NavMenu>
          {menu}
        </NavMenu>
        
        <NavBtn>
          <NavBtnLink to="/logout">Wylogowanie</NavBtnLink>
        </NavBtn>
        
      </NavbarContainer>
    </Nav>;
  } else {
    content = <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to="/" onClick={toggleHome}>
          fasttasking
        </NavLogo>
        <NavMenu>
          <NavItem>
            <NavLinks to="about" smooth="true" duration={2000}>
              O nas
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="discover" smooth="true" duration={2000}>
              Czym jest fasttasking?
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="signup" smooth="true" duration={2000}>
              Zalety aplikacji
            </NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">Logowanie</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>;
  }

  return (
    <>
      {location.pathname === "/" || location.pathname === "/login" || localStorage.getItem("loggedIn") === "true" || <Navigate to="/login" />}
      {content}
      
    </>
  );
};

export default Navbar;
