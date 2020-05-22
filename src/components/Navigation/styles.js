import { styled } from 'linaria/react'

export const Wrapper = styled.header`
  width: 100%;
  height: auto;
  padding: 1rem 0;
  background-color: var(--primary);
  color: var(--secondary);
`

export const Container = styled.nav`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 576px) {
    justify-content: space-around;
  }
`

export const Brand = styled.h2`
  text-transform: uppercase;

  & > a {
    color: var(--brand);
  }
`

export const NavItems = styled.ul`
  width: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-transform: uppercase;

  & > li {
    margin: 0 1rem;
  }

  @media (max-width: 576px) {
    display: none;
  }
`

export const MenuLink = styled.div`
  color: white;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  @media (max-width: 576px) {
    font-size: 1.4rem;
  }
`

export const CartCounter = styled.span`
  background-color: white;
  color: var(--brand);
  border-radius: 25px;
  padding: 0 6px;
  font-size: 1rem;
  float: right;
  margin: -10px;
  z-index: 20;
`
export const MenuIcon = styled.button`
  position: relative;
  height: 1.25rem;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 1000;

  &:focus {
    outline: none;
  }

  & > div {
    width: 1.25rem;
    height: 0.15rem;
    background: var(--secondary);
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
    transition: opacity 300ms, transform 300ms;

    &:first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (max-width: 576px) {
    display: flex;
  }
`

export const MobileItems = styled.nav`
  display: none;

  @media (max-width: 576px) {
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--primary);
    text-transform: uppercase;
    transition: transform 300ms;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    z-index: 999;

    & > ul > li {
      margin: 1.5rem 0;
      font-size: 1.2rem;
      font-weight: 600;
    }

    a {
      color: var(--brand);
    }

    a:hover {
      color: var(--accent);
    }
  }
`
