//Init Storage
const storage = new Storage();
//Get stored Location data
const weatherLocation = storage.getLocationData();
//Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
//init UI
const ui = new UI();



//Call getWeather when the dom loads --> eventListener
document.addEventListener('DOMContentLoaded', getWeather);

//Change Location ebent
document.getElementById('w-change-btn').addEventListener('click', (e) => {
	const city = document.getElementById("city").value;
	const state = document.getElementById("state").value;

	//Change weather Location
	weather.changeLocation(city, state);

	//Set location in Storage
	storage.setLocationData(city, state);

	//Get and display Weather
	getWeather();

	//Here we have to use Jquery cause the bootstrap class
	//is written in jquery. This will close the modal again.
	$('#locModal').modal('hide');
})

function getWeather() {
weather.getWeather() 
	.then(results => {
		console.log(results);
		 ui.paint(results);
	})
	.catch(err => console.log(err))
}