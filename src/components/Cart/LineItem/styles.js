import { styled } from 'linaria/react'

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 0 2rem 0;
  color: #000;

  @media (max-width: 576px) {
    margin-right: 2.5rem;
    justify-content: center;
    align-items: center;
  }
`

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;

  & > p {
    padding: 0.5rem 0;
    text-align: center;
  }
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
