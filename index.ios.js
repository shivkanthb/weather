
import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	StatusBar
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {fetchWeather} from './weather.js';
import Highlighter from 'react-native-highlight-words';

const iconNames = {
	'Default': 'ios-time',
	'clear-day': 'ios-sunny',
	'clear-night': 'ios-moon',
	'rain': 'ios-rainy',
	'snow': 'ios-snow' ,
	'sleet': 'ios-snow',
	'wind': 'ios-aperture',
	'fog': 'ios-cloudy',
	'cloudy': 'ios-cloudy' ,
	'partly-cloudy-day': 'ios-partly-sunny' ,
	'partly-cloudy-night':'ios-cloudy-night'  
}

const phrases = {
	'clear-day': {
		title: "Its fucking clear outside",
		subtitle: "GTF outside",
		highlight: "fucking",
		bg: "#FFD017"
	},
	'clear-night': {
		title: "Its fucking clear outside",
		subtitle: "Checkout the moon",
		highlight: "fucking",
		bg: "#22313F"
	},
	'rain': {
		title: "Raining like shit",
		subtitle: "Am I in Seattle or what",
		highlight: "like",
		bg: "#F9690E"
	},
	'snow': {
		title: "Jon Snow is outside",
		subtitle: "Make a snowman you lazy fuck",
		highlight: "Snow",
		bg: "#ECECEC"
	},
	'sleet': {
		title: "Hard Ice snow aka SLEET",
		subtitle: "Eat, code, sleet",
		highlight: "Ice",
		bg: "#ECF0F1"
	},
	'wind': {
		title: "Its Windy AF",
		subtitle: "Dont get blown away",
		highlight: "Windy",
		bg: "#87D37C"
	},
	'fog': {
		title: "What the Fog dude!",
		subtitle: "Use thy foglights while driving",
		highlight: "Fog",
		bg: "#1F3A93"
	},
	'cloudy': {
		title: "Cloudy as SHIT",
		subtitle: "keep your shades at home",
		highlight: "Cloudy",
		bg: "#1E8BC3"
	},
	'partly-cloudy-day': {
		title: "The sun and clouds are playing",
		subtitle: "Dont give a shit",
		highlight: "clouds",
		bg: "#1E8BC3"
	},
	'partly-cloudy-night': {
		title: "Meh. ",
		subtitle: "Does it really matter?",
		highlight: "Meh",
		bg: "#22313F"
	} 
}

class fuckingweather extends Component {

	componentWillMount() {
		this.state = {
			temp: 0,
			weather: 'Default'
		}
	}

	componentDidMount() {
		this.getLocation((posData) => {
			fetchWeather(posData.coords.latitude, posData.coords.longitude)
				.then(res =>  {
					console.log(res);
					this.setState({
					temp: Math.round(res.temp),
					weather: res.weather
					})
				})
		})
		// fetchWeather(50,70)
		// 	.then(res => console.log(res))
	}

	testFunc() {
		alert("TEST");
	}

	getLocation(callback) {
		navigator.geolocation.getCurrentPosition(
			(posData) => callback(posData),
			(error) => alert(error),
			{timeout: 10000}
		)
		// navigator.geolocation.getCurrentPosition(
		// 	(posData) => fetchWeather(posData.coords.latitude, posData.coords.longitude)
		// 		.then(res => this.setState({
		// 			temp: res.temp,
		// 			weather: res.weather
		// 		})),
		// 	(error) => alert(error),
		// 	{timeout: 10000}
		// )
	}
	render() {

		// Landing page
		if (this.state.weather=="Default") {
		    return (
		    	<View style={styles.loadingPage}>
		    		<Icon name={iconNames[this.state.weather]} size={40} color={'white'} />
		    	</View>
		    );
		}
		return (
			<View style={[styles.container, {backgroundColor: phrases[this.state.weather].bg}]}>
				<StatusBar hidden={true} />
				 <View style={styles.header}>
				 	<Icon name={iconNames[this.state.weather]} size={40} color={'white'} />
				 	<Text style={styles.temp}>{this.state.temp}° F</Text>
				 </View>
				 <View style={styles.body}>
					 <Highlighter
					  style={styles.title}
					  highlightStyle={{color: 'red'}}
					  searchWords={[phrases[this.state.weather].highlight]}
					  textToHighlight={phrases[this.state.weather].title}
					  />
				 	<Text style={styles.subtitle}>{phrases[this.state.weather].subtitle}</Text>
				 </View>
			</View>
		);
	}
}

/*
in flexBox,
justifyContent is for Y-axis
alignItems is for X axis.
*/

const styles = StyleSheet.create({
	loadingPage: {
	 	flex:1,
	 	alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'black'
	},
	container: {
		flex: 1,
		backgroundColor: '#FFD017'
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		flex:1,
	},
	temp: {
		fontFamily: 'HelveticaNeue-Bold',
		fontSize: 32,
		color: 'white'
	},
	body: {
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
		flex:5,
		// backgroundColor: 'red',
		margin: 10
	},
	title: {
		fontSize: 72,
		fontFamily: 'HelveticaNeue-Bold',
		color: 'white',
		marginBottom: 5
	},
	subtitle: {
		fontSize: 16,
		fontFamily: 'HelveticaNeue-Medium',
		color: 'white'
	},
})

AppRegistry.registerComponent('fuckingweather', () => fuckingweather);