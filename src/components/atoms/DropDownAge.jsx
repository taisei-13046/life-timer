import React from "react";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styled from "styled-components"

export const DropDownAge = () => {
	return (
		<Sdiv>
			<FormControl sx={{ m: 2, minWidth: 80 }}>
				<InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
				<Select
				labelId="demo-simple-select-autowidth-label"
				id="demo-simple-select-autowidth"
				autoWidth
				label="Age"
				>
				<MenuItem value="">
					<em>None</em>
				</MenuItem>
				<MenuItem value={10}>Twenty</MenuItem>
				<MenuItem value={21}>Twenty one</MenuItem>
				<MenuItem value={22}>Twenty one and a half</MenuItem>
				</Select>
			</FormControl>
		</Sdiv>
	)
}

const Sdiv = styled.div`
	margin-left: 300px;
`
