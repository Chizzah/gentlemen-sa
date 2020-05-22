import { styled } from 'linaria/react'

export const Grid = styled.section`
  max-width: 992px;
  margin: 0 auto;
  padding: 64px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Product = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 1px 2px #ccc;
  -moz-box-shadow: 1px 1px 1px 2px #ccc;
  -webkit-box-shadow: 1px 1px 1px 2px #ccc;
`

export const Title = styled.span`
  margin-top: 1rem;
  padding: 0 1rem;
  font-weight: 600;
  font-size: 1.4rem;
`

export const PriceTag = styled.span`
  margin-top: 0.5rem;
  padding: 0 1rem;
  font-weight: 300;
  font-size: 1rem;
`

export const Button = styled.button`
  margin: 1rem;
  border: 1.5px solid black;
  background-color: #fff;
  font-size: 0.6rem;
  font-weight: 600;
  padding: 16px;
  text-align: center;
  text-transform: uppercase;
  display: inline-block;
  transition: all 0.3s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: #fff;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 576px) {
    font-size: 0.4rem;
  }
`
