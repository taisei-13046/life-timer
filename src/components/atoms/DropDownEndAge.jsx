import React from "react";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styled from "styled-components"

export const DropDownEndAge = (props) => {
	const {endAge, setEndAge} = props;
	return (
		<Sdiv>
			<FormControl sx={{ m: 1, minWidth: 120 }}>
				<InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
				<Select
				labelId="demo-simple-select-autowidth-label"
				id="demo-simple-select-autowidth"
				autoWidth
				value={endAge}
				onChange={(e) => setEndAge(e.target.value)}
				label="Age"
				>
				<MenuItem value={70}>70</MenuItem>
				<MenuItem value={71}>71</MenuItem>
				<MenuItem value={72}>72</MenuItem>
				<MenuItem value={73}>73</MenuItem>
				<MenuItem value={74}>74</MenuItem>
				<MenuItem value={75}>75</MenuItem>
				<MenuItem value={76}>76</MenuItem>
				<MenuItem value={77}>77</MenuItem>
				<MenuItem value={78}>78</MenuItem>
				<MenuItem value={79}>79</MenuItem>
				<MenuItem value={80}>70</MenuItem>
				<MenuItem value={81}>81</MenuItem>
				<MenuItem value={82}>82</MenuItem>
				<MenuItem value={83}>83</MenuItem>
				<MenuItem value={84}>84</MenuItem>
				<MenuItem value={85}>85</MenuItem>
				<MenuItem value={86}>86</MenuItem>
				<MenuItem value={87}>87</MenuItem>
				<MenuItem value={88}>88</MenuItem>
				<MenuItem value={89}>89</MenuItem>
				<MenuItem value={90}>90</MenuItem>
				<MenuItem value={91}>91</MenuItem>
				<MenuItem value={92}>92</MenuItem>
				<MenuItem value={93}>93</MenuItem>
				<MenuItem value={94}>94</MenuItem>
				<MenuItem value={95}>95</MenuItem>
				<MenuItem value={96}>96</MenuItem>
				<MenuItem value={97}>97</MenuItem>
				<MenuItem value={98}>98</MenuItem>
				<MenuItem value={99}>99</MenuItem>
				<MenuItem value={100}>100</MenuItem>
				</Select>
			</FormControl>
		</Sdiv>
	)
}

const Sdiv = styled.div`
	margin-left: 300px;
`
