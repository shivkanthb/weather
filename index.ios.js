
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

class fuckingweather extends Component {

	componentDidMount() {
		this.getLocation();
		fetchWeather(10,20);
	}

	testFunc() {
		alert("TEST");
	}
	getLocation() {
		navigator.geolocation.getCurrentPosition(
			(posData) => console.log(posData),
			(error) => alert(error),
			{timeout: 10000}
		)
	}
	render() {
		return (
			<View style={styles.container}>
				<StatusBar hidden={true} />
				 <View style={styles.header}>
				 	<Icon name={'ios-sunny'} size={75} color={'white'} />
				 	<Text style={styles.temp}>24</Text>
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