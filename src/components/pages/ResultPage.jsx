import React from "react";
import Countdown from 'react-countdown'
import { makeStyles } from '@material-ui/core';
import styled from "styled-components"
import { BackButton } from "../atoms/BackButton";

export const ResultPage = (props) => {
	const {age, endAge} = props;
	const restAge = endAge - age;
	const restAgeDay = restAge * 365;
	const restAgeByHour = restAge * 3600;
	const restAgeBySecond = restAge * 31536000 * 10000
	const classes = tagStyle();
	return (
		<div className={classes.back}>
			<div className={classes.descriptionYear} >あなたに残された年数</div>
				<p className={classes.year}>{restAge}年</p>
			<div className={classes.descriptionDay} >あなたに残された日数</div>
				<p className={classes.day}>{restAgeDay}日</p>
			<div className={classes.descriptionHour}>あなたに残された時間(Hour)</div>
				<p className={classes.hour}>{restAgeByHour}時間</p>
			<div className={classes.descriptionSecond}>あなたに残された時間(Second)</div>
			<Countdown className={classes.countDown} date={Date.now() + restAgeBySecond} />
			<BackButton className={classes.button} />
		</div>
	  );
}

const tagStyle = makeStyles(() => ({
	descriptionYear: {
		fontFamily: "'Share Tech Mono', monospace",
		color: "#ffffff",
		textAlign: "center",
		position: "absolute",
		left: "50%",
		top: "10%",
		transform: "translate(-50%, -50%)",
		color: "#daf6ff",
		textShadow: "0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0)",
	},
	year: {
		fontFamily: "'Share Tech Mono', monospace",
		color: "#ffffff",
		textAlign: "center",
		position: "absolute",
		left: "50%",
		top: "15%",
		transform: "translate(-50%, -50%)",
		color: "#daf6ff",
		textShadow: "0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0)",
	},
	descriptionDay: {
		fontFamily: "'Share Tech Mono', monospace",
		color: "#ffffff",
		textAlign: "center",
		position: "absolute",
		left: "50%",
		top: "30%",
		transform: "translate(-50%, -50%)",
		color: "#daf6ff",
		textShadow: "0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0)",
	},
	day: {
		fontFamily: "'Share Tech Mono', monospace",
		color: "#ffffff",
		textAlign: "center",
		position: "absolute",
		left: "50%",
		top: "35%",
		transform: "translate(-50%, -50%)",
		color: "#daf6ff",
		textShadow: "0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0)",
	},
	descriptionHour: {
		fontFamily: "'Share Tech Mono', monospace",
		color: "#ffffff",
		textAlign: "center",
		position: "absolute",
		left: "50%",
		top: "50%",
		transform: "translate(-50%, -50%)",
		color: "#daf6ff",
		textShadow: "0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0)",
	},
	hour: {
		fontFamily: "'Share Tech Mono', monospace",
		color: "#ffffff",
		textAlign: "center",
		position: "absolute",
		left: "50%",
		top: "55%",
		transform: "translate(-50%, -50%)",
		color: "#daf6ff",
		textShadow: "0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0)",
	},
	descriptionSecond: {
		fontFamily: "'Share Tech Mono', monospace",
		color: "#ffffff",
		textAlign: "center",
		position: "absolute",
		left: "50%",
		top: "70%",
		transform: "translate(-50%, -50%)",
		color: "#daf6ff",
		textShadow: "0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0)",
	},
	countDown: {
		fontFamily: "'Share Tech Mono', monospace",
		color: "#ffffff",
		textAlign: "center",
		position: "absolute",
		left: "50%",
		top: "75%",
		transform: "translate(-50%, -50%)",
		color: "#daf6ff",
		textShadow: "0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0)",
	},
	back: {
		backgroundColor: "#0f3854",
		background: "radial-gradient(ellipse at center,  #0a2e38  0%, #000000 70%)",
		backgroundSize: "100%",
		width: "100vw",
  		height: "100vh",
	},
	button: {
		left: "50%",
		top: "85%",
	}
}))
