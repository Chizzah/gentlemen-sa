import { css } from 'linaria'
import { styled } from 'linaria/react'

export const Footer = styled.footer`
  position: sticky;
  width: 100%;
  height: auto;
  background-color: #333;
  color: var(--secondary);
`

export const TwoColumnGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 6rem 1fr;
  grid-template-rows: 1 auto;
  grid-template-areas: "left . right";
  padding: 5rem;

  @media (max-width: 992px){
    display: block;
  }
`

export const GridLeft = styled.div`
  grid-area: left;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > a {
    margin-top: 3rem;
    padding-right: 1rem;
  }
`

export const GridRight = styled.div`
  grid-area: right;
`

export const TwoColumnGridRight = styled.section`
  display: grid;
  grid-template-columns: 1fr 0.25rem 1fr;
  grid-template-areas: "left . right";

  @media (max-width: 576px) {
    display: block;
    text-align: center;
  }
`

export const FooterNav = styled.nav`
  & > ul > li {
    padding: 0.5rem 0;
  }

  & > ul > li > a:hover {
    color: var(--brand);
  }
`

export const Title = styled.h3`
  font-size: 0.9rem;
  font-weight: 600;
  margin: 1rem 0;
  text-transform: uppercase;

  @media (max-width: 576px) {
    margin: 2rem 0;
    text-align: center;
  }
`

export const Divider = styled.div`
  width: 1.5rem;
  height: auto;
  margin: 1rem 0;
  background-color: var(--brand);
  border: 1px solid var(--brand);

  @media (max-width: 576px) {
    margin: 0 auto 1rem;
  }
`

export const Text = styled.span`
  font-size: 1rem;
  font-weight: 300;
`

export const StyledLink = css`
  color: var(--brand);
  text-decoration: underline;

    &:hover {
      color: var(--accent);
    }
`

export const FootNote = styled.section`
  width: 100;
  height: auto;
  padding: 2rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #222;

  & > p > span,
  & > p > a {
    color: var(--brand);
  }

  @media (max-width: 576px) {
    display: block;
    text-align: center;
    padding: 1rem 0;

    & > p {
      padding: 0.5rem 0;
    }
  }
`