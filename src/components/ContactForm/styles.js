import { styled } from 'linaria/react'

export const Container = styled.section`
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 3rem;
  background: var(--secondary);
  color: var(--primary);
  text-align: center;
  border-radius: 10px;

  & > h3 {
    font-size: 2rem;
    font-weight: 600;
    margin: 1rem 0;
  }
`

export const Form = styled.form`
  width: 50%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > :nth-child(1) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > div > input {
    width: 100%;
    margin: 0.25rem;
    padding: 0.5rem;
    border: 1px solid var(--accent);
    border-radius: 25px;
  }

  & > div > input:focus {
    outline: none;
  }

  & > :nth-child(2) {
    width: 99%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & > div > textarea {
    width: 99%;
    padding: 0.5rem;
    border: 1px solid var(--accent);
    border-radius: 10px;
  }

  & > div > textarea:focus {
    outline: none;
  }

  & > div > button {
    width: 100%;
    height: auto;
    margin-top: 0.5rem;
    padding: 0.5rem;
    background: var(--brand);
    color: var(--secondary);
    border: 1px solid var(--primary);
    border-radius: 25px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    transition: background 300ms ease, color 300ms ease;

    &:hover {
      background: var(--accent);
      color: var(--primary);
    }

    &:focus {
      outline: none;
    }
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`
