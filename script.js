var database =[
{
username :"halil",
password: "supersecret"
}
];

var newsFeed = [
{
	username: "bobby",
	timeline: " So tired from all learning"
},
{
	username: "Sally",
	timeline: "JavaScript is soo cool!!!"
}
];
var userNamePrompt = prompt("What is your username?");
var passwordPrompt =prompt("what is your password");
function signIn(user,pass) {
if (user === database[0].username &&
	pass === database[0].password) {
	console.log(newsFeed);
} else{
	alert("sorry, wrong username and password");
}
}
signIn( userNamePrompt,passwordPrompt);