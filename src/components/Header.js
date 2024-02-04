import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";

const Wrapper = styled.div`
  .header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    &.scrolled {
      background: yellow;
      transition: background 0.3s ease-in-out;
    }
  }

  background: white;

  img {
    width: 20%;
    display: flex;
    justify-content: flex-start;
    margin: 0 auto;
    margin-left: 2%;
    z-index: 4;

    @media (min-width: 992px) {
      width: 20%;
    }
    @media (min-width: 1000px) {
      width: 28%;
      margin-left: -2%;
    }
 
  }

  ul {
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: left;
    justify-content: flex-start;
    margin-top: 100px;
    flex-direction: column;
    list-style: none;
    max-width: 0;
    top: 0%;
    left: 0%;
    transition: all 0.4s ease-out;
    margin: 0px;
    padding: 0px;
    overflow: hidden;
    background: #1b0b06;
    color: white;

    .a {
      padding: 29px;
      font-size: 17px;
      color: white;
      font-weight: 600;
      background: #1b0b06;
      line-height: 14px;

      a:hover {
        color: black;
      }
      a:hover::after {
  content: '';
  position: absolute;
  top: 50%;
  right: -10px; /* Adjust the distance from the link */
  height: 2px;

  width: 50px; /* Length of the line */
  transform: translateY(-50%);
  }
    }

    li a {
      color: white;
    }

    .pus {
      margin-top: 100px;
      margin-left: 100px;
    }
    li {
      background: #1b0b06;
    }

    .sama {
      float: right;
  padding-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
      @media (min-width: 1200px) {
        h1 {
          opacity:7;
          padding-right: 100px;
          color:#493C38;
          font-family: ${(props) => props.theme.fam.bold};
          font-size: 150px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          transition: color 0.3s ease-out;
        }
      }
      h1:hover {
        color: #fff;
      }
      p{
        margin-right:180px;
        animation: mymove 5s infinite;
      }
    }
  }

  .hamburger {
    padding: 2px 2px 3px 3px;
    position: fixed;
    left: 0;
    top: 6%;
    z-index: 4;
    margin-right: 20px;
    border: 2px solid white;
  }

  img {}

  .hamburger {
    margin-left: 45px;
    padding: 14px 35px 17px 7px;
    @media (min-width: 1200px) {
     
      z-index: 5;
    }
  }

  span {
    width: 30px;
    height: 3px;
    background: white;
    position: absolute;
    border-radius: 7px;
    transition: transform 0.3s;
    &:before {
      width: 100%;
      height: 100%;
      background: white;
      border-radius: 10px;
      position: absolute;
      top: -7px;
      content: "";
      transition: all 0.3s ease-out;
    }
    &:after {
      width: 100%;
      height: 100%;
      background: white;
      border-radius: 10px;
      position: absolute;
      top: 7px;
      content: "";
      transition: all 0.3s ease-out;
    }
  }

  .open {
    span {
      background: transparent;
      &:before {
        top: 0;
        transform: rotate(495deg);
      }
      &:after {
        top: 0;
        transform: rotate(-495deg);
      }
    }
  }

  .change {
    max-width: 91%;
    @media (min-width: 1200px) {
      max-width: 100%;
      z-index: 4;
    }
  }




`;

function Header() {
  const [checked, setChecked] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [zIndex, setZIndex] = useState(4);
  const [headerContent, setHeaderContent] = useState({
    title: "About Tay",
    paragraph: "Download CV",
  });
  const location = useLocation();
  const isDonatePage = location.pathname === "/Donate";
  const whiteLinkPages = ["/OurStory", "/HireUs"];

  const isWhiteLinkPage = whiteLinkPages.includes(location.pathname);

  useEffect(() => {
    if (isDonatePage && window.innerWidth >= 1200) {
      setZIndex(9);
    } else {
      setZIndex(4);
    }
  }, [isDonatePage]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setChecked(false);
  };

  const handleLinkHover = (title, paragraph) => {
    setHeaderContent({
      title,
      paragraph,
    });
  };

  return (
    <Wrapper className={`wrap ${scrolled ? "scrolled" : ""}`}>
      <div className="header" style={{ zIndex: zIndex }}>
        <div
          className={checked ? "hamburger open" : "hamburger"}
          onClick={() => setChecked(!checked)}
        >
          <span></span>
        </div>
        <ul className={checked ? "menu change" : "menu"}>
          <div className="pus">
            <li
              className={`a ${isWhiteLinkPage ? "white-link" : ""}`}
              onMouseEnter={() => handleLinkHover("About Tay", "Download CV")}
              
            >
              
              <NavLink
                className="nav-link"
                to="/About"
                exact
                onClick={handleLinkClick}
              >
                <a href="">Discover Tay</a>
              </NavLink>
            </li>
            <li
              className={`a ${isWhiteLinkPage ? "white-link" : ""}`}
              onMouseEnter={() =>
                handleLinkHover("Portfolio", "See My Projects")
              }
            >
              <NavLink
                className="nav-link"
                to="/MyPortfolio"
                exact
                onClick={handleLinkClick}
              >
                <a href="">My Portfolio</a>
              </NavLink>
            </li>
            <li
              className={`a ${isWhiteLinkPage ? "white-link" : ""}`}
              onMouseEnter={() =>
                handleLinkHover("Get In Touch", "Contact Me +263 771 733 755 magwarodylan5@gmail.com")
              }
            >
              <NavLink
                className="nav-link"
                to="/ContactTay"
                exact
                onClick={handleLinkClick}
              >
                <a href="">Get In Touch</a>
              </NavLink>
            </li>
          </div>
          <div className="sama">
            <h1>{headerContent.title}</h1>
            <p>{headerContent.paragraph}</p>
          </div>
        </ul>
      </div>
    </Wrapper>
  );
}

export default Header;