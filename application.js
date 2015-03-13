// A simple way to look at a Treehouse user's profile information: badge count and points
// Using Node.js to connect to Treehouse API to get profile information

// doesn't have to match the String of the module name but sensible to refer to it as 
// such so we know what we're referring to
var http = require("http"); 
var username = "Salman";

function printMessage(username, badgeCount, points) {
	var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
	console.log(message); 
}

// Connect to the API URL (http://teamtreehouse.com/username.json)
var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response) {
	//console.dir(response);
	
	// log out the StatusCode: if 200 OK then we successfully connected to the API URL
	console.log(response.statusCode); 
	// Read the data
	// Parse the data
	// Print the data
});