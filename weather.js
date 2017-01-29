
export const fetchWeather = (lat, lng) => {
	var latlng = lat+","+lng;
	var darksky_key = "679dabfb8a1db5a2d53599f4e10db597";
	const url = "https://api.darksky.net/forecast/"+darksky_key+"/"+latlng;

	//fetch takes an url and returns a promise.
	// Also add 'NSArbitraryLoads' key and value as 'true' under NSAppTransportSecuriy in the plist file
	fetch(url)
		.then(res => res.json())
			.then(json => console.log({
				temp: json.currently.temperature,
				weather: json.currently.summary
			}))
}