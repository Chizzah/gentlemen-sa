import { styled } from 'linaria/react'

export const Container = styled.section`
  text-align: center;
`

export const Title = styled.h1`
  margin-bottom: 1.3rem;
  color: #A08D7C;
  font-size: 1.3em;
  font-weight: 600;
  text-transform: uppercase;
  @media(max-width: 576px) {
      margin-top: 6rem;
      font-size: 1rem;
    }
`
export const Text = styled.p`
  margin-bottom: 2rem;
  color: #f9f9f9;
  font-size: 3.5em;
  font-weight: 300;
  text-transform: uppercase;
  @media(max-width: 576px) {
    font-size: 2rem;
  }
`