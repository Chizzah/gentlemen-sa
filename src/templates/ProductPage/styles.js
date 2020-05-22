import { styled } from 'linaria/react'

export const Container = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 6rem 0;
`

export const TwoColumnGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 3rem 1fr;
  grid-template-rows: 1auto;
  grid-template-areas: "left . right";
  padding: 6rem;
  border-radius: 3px;
  box-shadow: 3px 3px 5px 4px #ccc;
  -moz-box-shadow: 3px 3px 5px 4px #ccc;
  -webkit-box-shadow: 3px 3px 5px 4px #ccc;

  @media (max-width: 992px){
    display: block;
    padding: 1.5rem;
  }
`

export const GridLeft = styled.div`
  grid-area: left;

  @media (max-width: 576px){
    margin: 0 auto;
  }
`

export const GridRight = styled.div`
  grid-area: right;
`

export const ProductTitle = styled.h1`
  font-size: 2.25rem;
  margin-bottom: 15px;
  word-wrap: break-word;
  font-family: "Helvetica","Helvetica",sans-serif;
  font-weight: 400;
  margin: 0 0 0.5rem;
  line-height: 1.4;
`

export const GalleryContainer = styled.div`
  width: 480px;
  margin: 0 auto;

  @media (max-width: 576px){
    width: 300px;
    margin-bottom: 3rem;
  }
`