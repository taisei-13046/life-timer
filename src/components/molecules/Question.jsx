import React from "react"
import styled from "styled-components"

import { DropDownAge } from "../atoms/DropDownAge"

export const Question = (props) => {
	const { children } = props;
	return (
		<>
			<SquestionDiv>{children}</SquestionDiv>
			<DropDownAge />
		</>
	)
}

const SquestionDiv = styled.div`
	padding: 1rem 2rem;
	border-bottom: 6px double #000;
	background: #f4f4f4;
	margin: 50px 700px 0px 280px;
`
