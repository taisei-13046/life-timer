import React from "react"
import { Question } from "../molecules/Question"
import { Title } from "../molecules/Tiele"
import video from "../../img/clock2.mp4"
import styled from "styled-components"

export const MainPage = () => {
	return (
		<div>
			<Svideo src={video} autoPlay loop muted></Svideo>
			<Title></Title>
			<Question>今は何歳ですか？</Question>
			<Question>何歳まで生きる予定？</Question>
			<br />
			<button type="submit">測定</button>
		</div>
	)
}

const Svideo = styled.video`
	position: fixed;
	right: 0;
	bottom: 0;
	min-width: 100%;
	min-height: 100%;
	width: auto;
	height: auto;
	z-index: -100;
	background-size: cover;
`
