import { styled } from 'linaria/react'

export const StyledPrice = styled.h3`
  margin-top: 2rem;
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

export const Holder = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const MiniHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

    & > input {
      padding: 13px;
      border: 1px solid #999;

      &:focus {
        outline: none;
      }
    }
`

export const Button = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  font-size: 0.6rem;
  font-weight: 600;
  padding: 16.5px;
  text-align: center;
  text-transform: uppercase;
  display: inline-block;
  transition: all 0.3s ease 0s;
  cursor: pointer;

    &:hover {
      background-color: #333;
    }

    &:focus {
      outline: none;
    }

  @media(max-width: 576px) {
    font-size: 0.4rem;
  }
`