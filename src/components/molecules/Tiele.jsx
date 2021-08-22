import React from "react"
import logo from "../../img/lifeTimerLogo.png"
import styled from "styled-components"

export const Title = () => {
	return (
		<Simg src={logo} alt="Life Timer" />
	)
}

const Simg = styled.img`
	border-radius: 30px;
	margin: 50px 0px 0px 300px ;
	potision: flex;
`
