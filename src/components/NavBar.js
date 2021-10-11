import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/fizzBuzz">FizzBuzz</NavLink>
          <NavLink to="/reverseMe">ReverseMe</NavLink>
          <NavLink to="/daysUntil">DaysUntil</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/contact">Contact</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  background-color: #20b380;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

const NavLink = styled(Link)`
  color: #dcdcdc;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-size: 2vw;
  cursor: pointer;
  &.active {
    color: #000000;
  }
  &:hover {
    transition: 0.2s ease-in-out;
    background: #696969;
    color: #fff;
  }
`;

const Bars = styled.div`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8vw;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 359px) {
    display: none;
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 359px) {
    display: none;
  }
`;

const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #dcdcdc;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  font-size: 1.8vw;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }

  @media screen and (max-width: 359px) {
    display: none;
    font-size: 0.1vw;
  }
`;

export default Navbar;
