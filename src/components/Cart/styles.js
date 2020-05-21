import { styled } from 'linaria/react'

export const TwoColumnGrid = styled.section`
	display: grid;
	color: #fff;
	grid-template-columns: 2fr 6rem 1fr;
	grid-template-rows: 1auto;
	grid-template-areas: "left . right";
	width: 100%;
	height: 100%;
  border: 1px solid #eee;
  box-shadow: 2px 2px #ccc;
  -moz-box-shadow: 2px 2px #ccc;
  -webkit-box-shadow: 2px 2px #ccc;

	@media (max-width: 992px){
		display: block;
	}
`

export const GridLeft = styled.div`
	grid-area: left;
	padding-top: 2rem;
	padding-left: 2rem;
`

export const GridRight = styled.div`
	grid-area: right;
	padding: 12rem 3rem;
	background-color: #A08D7C;

	@media (max-width: 992px){
		padding: 1.5rem 1rem;
	}
`

export const Heading = styled.h2`
	margin-top: 1rem;
	margin-bottom: 0.5rem;
	font-size: 1.5rem;
	font-weight: 600;

	& > p {
		font-size: 1rem;
		font-weight: 300;
	}
`

export const Button = styled.button`
	border: 1.5px solid black;
	background-color: #000;
	color: #fff;
	font-size: 1rem;
	font-weight: 600;
	padding: 16px;
	margin-top: 3rem;
	border-radius: 32px;
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

	@media (max-width: 576px) {
		margin-top: 1.5rem
		font-size: 0.8rem;
	}
`