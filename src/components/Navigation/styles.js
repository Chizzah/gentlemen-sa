import { styled } from 'linaria/react'

export const Wrapper = styled.header`
  width: 100%;
  height: 10vh;
  background-color: var(--primary);
`

export const Container = styled.nav`
  max-width: 1280px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1.45rem 0;
  margin: 0 auto;
`

export const Brand = styled.h2`
  color: var(--brand);
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
  font-size: 1.2rem;
  float: right;
  margin: -10px;
  z-index: 20;
`

export const MenuIcon = styled.button`
  position: fixed;
`
