var professionalBoxers = [
	{
		name: "Manny Pacquiao", 
		weight: 146 + " lbs",
		wins: 61,
		losses: 7
	},
	{
		name: "Floyd Mayweather",
		weight: 150 + " lbs",
		wins: 50,
		losses: 0
	},
	{
		name: "Mike Tyson",
		weight: 218 + " lbs",
		wins: 50,
		losses: 6
	},
	{
		name: "Canelo Alvarez", 
		weight: 164 + " lbs",
		wins: 52,
		losses: 1
	},
	{
		name: "Anthony Joshua",
		weight: 249 + " lbs",
		wins: 22,
		losses: 0
	},
	{
		name: "Gennady Golovkin",
		weight: 159 + " lbs",
		wins: 38,
		losses: 1
	},
	{
		name: "Muhammad Ali",
		weight: 236 + " lbs",
		wins: 56,
		losses: 5
	},
];

// click a button and get the info of a random professional boxer from the array of objects
const myButton = document.querySelector('#myButton');

	
function randomBoxerName() {
	let randomName = professionalBoxers[Math.floor(Math.random() * professionalBoxers.length)].name;
	return randomName;
}

function print(message) {
	let outputDiv = document.querySelector('.child');
	outputDiv.innerHTML = message;
}

myButton.addEventListener('click', () => {
	if(randomBoxerName() === "Manny Pacquiao") {
		print("<h2>Manny Pacquiao</h2>" + 
			  "<p>Weight: " + professionalBoxers[0].weight + "</p>" +
			  "<p>Wins: " + professionalBoxers[0].wins + "</p>" + 
			  "<p>Losses: " + professionalBoxers[0].losses + "</p>");
		const myImage = document.createElement("img");
		myImage.src = "IMAGES/MannyPacquiao.jpg";
		document.querySelector(".child").appendChild(myImage);
	} else if (randomBoxerName() === "Floyd Mayweather") {
		print("<h2>Floyd Mayweather</h2>" + 
			  "<p>Weight: " + professionalBoxers[1].weight + "</p>" +
			  "<p>Wins: " + professionalBoxers[1].wins + "</p>" + 
			  "<p>Losses: " + professionalBoxers[1].losses + "</p>");
		const myImage = document.createElement("img");
		myImage.src = "IMAGES/FloydMayweather.jpg";
		document.querySelector(".child").appendChild(myImage);
	} else if (randomBoxerName() === "Mike Tyson") {
		print("<h2>Mike Tyson</h2>" + 
			  "<p>Weight: " + professionalBoxers[2].weight + "</p>" +
			  "<p>Wins: " + professionalBoxers[2].wins + "</p>" + 
			  "<p>Losses: " + professionalBoxers[2].losses + "</p>");
		const myImage = document.createElement("img");
		myImage.src = "IMAGES/MikeTyson.jpg";
		document.querySelector(".child").appendChild(myImage);
	} else if (randomBoxerName() === "Canelo Alvarez") {
		print("<h2>Canelo Alvarez</h2>" + 
			  "<p>Weight: " + professionalBoxers[3].weight + "</p>" +
			  "<p>Wins: " + professionalBoxers[3].wins + "</p>" + 
			  "<p>Losses: " + professionalBoxers[3].losses + "</p>");
		const myImage = document.createElement("img");
		myImage.src = "IMAGES/CaneloAlvarez.jpg";
		document.querySelector(".child").appendChild(myImage);
	} else if (randomBoxerName() === "Anthony Joshua") {
		print("<h2>Anthony Joshua</h2>" + 
			  "<p>Weight: " + professionalBoxers[4].weight + "</p>" +
			  "<p>Wins: " + professionalBoxers[4].wins + "</p>" + 
			  "<p>Losses: " + professionalBoxers[4].losses + "</p>");
		const myImage = document.createElement("img");
		myImage.src = "IMAGES/AnthonyJoshua.jpg";
		document.querySelector(".child").appendChild(myImage);
	} else if (randomBoxerName() === "Gennady Golovkin") {
		print("<h2>Gennady Golovkin</h2>" + 
			  "<p>Weight: " + professionalBoxers[5].weight + "</p>" +
			  "<p>Wins: " + professionalBoxers[5].wins + "</p>" + 
			  "<p>Losses: " + professionalBoxers[5].losses + "</p>");
		const myImage = document.createElement("img");
		myImage.src = "IMAGES/GennadyGolovkin.jpg";
		document.querySelector(".child").appendChild(myImage);
	} else if (randomBoxerName() === "Muhammad Ali") {
		print("<h2>Muhammad Ali</h2>" + 
			  "<p>Weight: " + professionalBoxers[6].weight + "</p>" +
			  "<p>Wins: " + professionalBoxers[6].wins + "</p>" + 
			  "<p>Losses: " + professionalBoxers[6].losses + "</p>");
		const myImage = document.createElement("img");
		myImage.src = "IMAGES/MuhammadAli.jpg";
		document.querySelector(".child").appendChild(myImage);
	}
});
