
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

const iconNames = {
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

class fuckingweather extends Component {

	componentWillMount() {
		this.state = {
			temp: 0,
			weather: 'clear-day'
		}
	}

	componentDidMount() {
		this.getLocation((posData) => {
			fetchWeather(posData.coords.latitude, posData.coords.longitude)
				.then(res =>  {
					console.log(res);
					this.setState({
					temp: res.temp,
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
		return (
			<View style={styles.container}>
				<StatusBar hidden={true} />
				 <View style={styles.header}>
				 	<Icon name={iconNames[this.state.weather]} size={65} color={'white'} />
				 	<Text style={styles.temp}>{this.state.temp}</Text>
				 </View>
				 <View style={styles.body}>
				 	<Text style={styles.title}>
				 		<Text style={{color:'red'}}>Fucking</Text> Weather App.</Text>
				 	<Text style={styles.subtitle}>Make it rain</Text>
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
	container: {
		flex: 1,
		backgroundColor: '#FFD017'
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		flex:1,
		// backgroundColor: 'blue',
	},
	temp: {
		fontFamily: 'HelveticaNeue-Bold',
		fontSize: 45,
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