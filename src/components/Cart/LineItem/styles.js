import { styled } from 'linaria/react'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem 0 2rem 0;
  color: #000;
`

export const RemoveLineItem = styled.button`
  padding: 1rem;
  border-radius: 25px;
  background-color: #fff;
  background-image: url('../../../../resources/icons/x-circle.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`