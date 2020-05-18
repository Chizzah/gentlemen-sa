import { css } from 'linaria'
import { styled } from 'linaria/react'

export const Footer = styled.footer`
  position: sticky;
  width: 100%;
  height: auto;
  background-color: #111;
  color: white;
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
  grid-template-columns: 1fr 3rem 1fr;
  grid-template-areas: "left . right";
`

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 1rem 0;
  text-transform: uppercase;
`

export const Divider = styled.div`
  width: 1.5rem;
  height: auto;
  margin: 1rem 0;
  border: 1px solid #fff;
`

export const Text = styled.span`
  font-size: 0.9rem;
  font-weight: 300;
`

export const StyledLink = css`
  color: var(--brand);
  text-decoration: underline;

    &:hover {
      color: var(--accent);
    }
`