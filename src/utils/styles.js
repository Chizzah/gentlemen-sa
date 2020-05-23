import { css } from 'linaria'
import { styled } from 'linaria/react'

export const breakpoints = {
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
}

export const GlobalStyle = css`
  :global() {
    *,
    *:before,
    *:after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      margin: 0;
      padding: 0;
      font-family: Georgia, 'Times New Roman', Times, serif;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }

    body {
      --brand: #a08d7c;
      --primary: #000;
      --secondary: #f7fafc;
      --accent: #cbd5e0;
    }

    a {
      text-decoration: none;
      color: var(--secondary);
    }

    ul {
      list-style-type: none;
    }
  }
`

export const MainContent = styled.main`
  margin-top: 80px;
  margin-bottom: 40px;

  @media (max-width: 992px) {
    margin-top: 40px;
    margin-bottom: 20px;
  }
`

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 6rem 0;
`

export const StyledBackground = css`
  width: 100%;
  height: 90vh;
  background-position: 50% 60%;
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 1.5rem;
  font-weight: 300;
`

export const HeroButton = css`
  border: none;
  background: var(--brand);
  color: #f9f9f9;
  font-size: 1.5rem;
  font-weight: 300;
  padding: 1rem 2rem;
  text-transform: uppercase;
  display: inline-block;
  transition: all 0.3s ease 0s;
  cursor: pointer;

  &:hover {
    color: var(--brand);
    font-weight: 700;
    letter-spacing: 3px;
    background: none;
    box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.3s ease 0s;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`

export const SectionButton = css`
  border: 2px solid #f9f9f9;
  background: transparent;
  color: #f9f9f9;
  font-size: 1.3rem;
  font-weight: 300;
  padding: 1rem 2rem;
  text-transform: uppercase;
  display: inline-block;
  transition: all 0.3s ease 0s;
  cursor: pointer;

  &:hover {
    border: 1px solid #a08d7c;
    color: var(--brand);
    letter-spacing: 3px;
    background: none;
    box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.3s ease 0s;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`

export const HeroOverlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`

export const SectionOverlay = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.65);
`

export const InsideBorder = styled.div`
  position: absolute;
  width: 97%;
  height: 93%;
  margin: 0 auto;
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  z-index: -1;

  @media (max-width: 576px) {
    width: 93%;
  }
`

export const CartContainer = styled.section`
  width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 576px) {
    width: 100%;
    height: auto;
    padding: 0;
  }
`

export const CartTitle = styled.h1`
  color: var(--primary);
  margin: 2rem 0 3rem 2rem;
  font-size: 2.5rem;
  font-weight: 600;
`

export const FlexView = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Address = styled.address`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  & > ul > li {
    margin: 1rem 0;
  }

  & > ul > li > span {
    display: flex;
  }
`
