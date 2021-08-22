import React, {useState} from "react"
import { useHistory } from "react-router-dom";
import video from "../../img/clock2.mp4"
import styled from "styled-components"

import { AgeQuestion } from "../molecules/AgeQuestion"
import { EndAgeQuestion } from "../molecules/EndAgeQuestion"
import { Title } from "../molecules/Tiele"
import { SendButton } from "../atoms/SendButton"

export const MainPage = () => {
	const [age, setAge] = useState('');
	const [endAge, setEndAge] = useState('');
	return (
		<div>
			<Svideo src={video} autoPlay loop muted></Svideo>
			<Title></Title>
			<AgeQuestion age={age} setAge={setAge} />
			<EndAgeQuestion endAge={endAge} setEndAge={setEndAge} />
			<SendButton />
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
