import { styled } from 'linaria/react'

export const Wrapper = styled.header`
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  background-color: var(--primary);
  color: var(--secondary);
`

export const Container = styled.nav`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1.45rem 0;
  margin: 0 auto;

`

export const Button = styled.button`
  display: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  
  @media (max-width: 576px){
    display: block;
  }
`

export const Brand = styled.h2`
  font-size: 1.7rem;
  font-weight: 600;
  color: var(--brand);
  text-transform: uppercase;

  & > img {
    margin-right: 0.5rem;
  }
  
  @media (max-width: 576px){
    font-size: 1.4rem
  }
`

export const Menu = styled.ul`
  width: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-transform: uppercase;

  & > li {
    color: var(--secondary);
    padding: 0 0.75rem;
  }

  & > li > a:hover {
    color: var(--brand);
  }

  @media (max-width: 576px) {
    display: none;
  }
`

export const DropdownContent = styled.li`
  display: none;
  position: absolute;
  background-color: var(--primary);
  min-width: 220px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
  padding: 30px 0 12px 12px;
  text-transform: capitalize;

  & > a {
    padding: 0.5rem 0;
    font-size: 1.2rem;
  }

  & > a:hover {
    color: var(--brand);
  }
`

export const Dropdown = styled.ul`
  position: relative;
  display: inline-block;
  color: var(--secondary);
  cursor: pointer;
    
  &:hover ${DropdownContent} {
    display: flex;
    flex-direction: column;
  }
`

export const CartCounter = styled.span`
  background-color: var(--secondary);
  color: var(--brand);
  border-radius: 20px;
  padding: 0 6px;
  font-size: 1.2rem;
  float: right;
  margin: auto;
  z-index: 20;
`

export const MobileMenu = styled.nav`
  display: none;

  @media (max-width: 576px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary);
    color: var(--brand);

    & > ul > li {
      margin: 2rem 0;
      font-size: 1.5rem;
      font-weight: 600;

      &:hover {
        color: var(--accent);
      }
    }
  }
`