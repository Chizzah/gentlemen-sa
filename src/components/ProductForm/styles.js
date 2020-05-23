import { styled } from 'linaria/react'

export const StyledPrice = styled.h3`
  margin: 3rem 0;
  font-size: 1.5rem;
  font-weight: 600;
`

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: 300;
`

export const StyledSelect = styled.select`
  display: block;
  border: none;
  border: 1px solid #666;
  border-radius: 5px;
  padding: 0.5rem;

  &:focus {
    outline: none;
  }
`

export const QuantityWrapper = styled.section`
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  & > p {
    margin: 1rem 0;
  }
`

export const QuantityContainer = styled.div`
  margin-top: 0.5rem;
  width: 24rem;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & > input {
    display: inline-block;
    padding: 0.5rem;
    width: 70%;
    height: 100%;
    border: 1px solid #999;
    border-radius: 6px 0 0 6px;

    &:focus {
      outline: none;
    }
  }

  @media (max-width: 576px) {
    width: 16rem;
  }
`

export const AddToCart = styled.button`
  width: 30%;
  height: 100%;
  background-color: #000;
  color: #fff;
  border: none;
  font-size: 0.6rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  display: inline-block;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  border-radius: 0 6px 6px 0;

  &:hover {
    background-color: #333;
  }

  &:focus {
    outline: none;
  }
`
