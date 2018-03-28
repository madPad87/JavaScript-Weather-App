class Weather {

	constructor(city, state) {
		this.apiKey = 'b8b25c39f7db27b3';
		this.city = city;
		this.state = state;
	}

	//Fetch weather from apiKey

	async getWeather() {

		const response = await fetch(`http://api.wunderground.com/api/
			${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

		const responseData = await response.json();

		return responseData.current_observation;
	}

	//Change loctation
	changeLocation(city, state) {
		this.city = city;
		this.state = state;
	}
	
		
	
}