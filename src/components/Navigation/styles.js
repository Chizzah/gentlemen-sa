import { styled } from 'linaria/react'

export const Wrapper = styled.nav`
  background-color:  var(--primary);
`

export const Container = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.45rem;
  margin: 0 auto;
  max-width: 1280px;
`

export const Brand = styled.h2`
  font-size: 1.7rem;
  font-weight: 600;
  color: var(--brand);
  text-transform: uppercase;
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
    padding: 0 0.75rem;
  }

  & > li > a:hover {
    color: var(--brand);
  }

  @media (max-width: 480px) {
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
  z-index: 999;

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