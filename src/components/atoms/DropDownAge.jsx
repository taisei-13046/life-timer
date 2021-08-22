import React from "react";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styled from "styled-components"

export const DropDownAge = (props) => {
	const {age, setAge} = props;
	console.log(age)
	return (
		<Sdiv>
			<FormControl sx={{ m: 1, minWidth: 120 }}>
				<InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
				<Select
				labelId="demo-simple-select-autowidth-label"
				id="demo-simple-select-autowidth"
				autoWidth
				value={age}
				onChange={(e) => setAge(e.target.value)}
				label="Age"
				>
				<MenuItem value={10}>10</MenuItem>
				<MenuItem value={11}>11</MenuItem>
				<MenuItem value={12}>12</MenuItem>
				<MenuItem value={13}>13</MenuItem>
				<MenuItem value={14}>14</MenuItem>
				<MenuItem value={15}>15</MenuItem>
				<MenuItem value={16}>16</MenuItem>
				<MenuItem value={17}>17</MenuItem>
				<MenuItem value={18}>18</MenuItem>
				<MenuItem value={19}>19</MenuItem>
				<MenuItem value={20}>20</MenuItem>
				<MenuItem value={21}>21</MenuItem>
				<MenuItem value={22}>22</MenuItem>
				<MenuItem value={23}>23</MenuItem>
				<MenuItem value={24}>24</MenuItem>
				<MenuItem value={25}>25</MenuItem>
				<MenuItem value={26}>26</MenuItem>
				<MenuItem value={27}>27</MenuItem>
				<MenuItem value={28}>28</MenuItem>
				<MenuItem value={29}>29</MenuItem>
				<MenuItem value={30}>30</MenuItem>
				</Select>
			</FormControl>
		</Sdiv>
	)
}

const Sdiv = styled.div`
	margin-left: 300px;
`
