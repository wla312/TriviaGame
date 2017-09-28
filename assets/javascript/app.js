// set global variables

// var correctAnswers = 0;
// var incorrectAnswers = 0;
// var unanswered = 10;

var triviaQA = [
	{
		question: "Q:Frasier is a spin-off of what television show?",
		answers: ["Monk", "Golden Girls", "Cheers", "Wings"],
		correctAnswer: "Cheers"
	},
	{
		question: "Q:What are the call letters of Frasier's radio station in Seattle?",
		answers: ["KCAL", "KACL", "CALK", "KCLA"],
		correctAnswer: "KACL"
	},
	{
		question: "Q:Who is Frasier's producer?",
		answers: ["Poppy Delafield", "Roz Doyle", "Amber Edwards", "Ronee Lawrence"],
		correctAnswer: "Roz Doyle"
	},
	{
		question: "Q:What is the name of Frasier's apartment building?",
		answers: ["Elliott North Towers", "Seattle Bay Towers", "Queen Anne Towers", "Elliott Bay Towers"],
		correctAnswer: "Elliott Bay Towers"
	},
	{
		question: "Q:How did Frasier sign off on his radio show?",
		answers: ["Thanks for talking Seattle", "Good mental health", "Be well Seattle", "Thank you for listening"],
		correctAnswer: "Good mental health"
	},
	{
		question: "Q:What is the name of Frasier's first wife?",
		answers: ["Lilith Sternin", "Nanette Guzman", "Lana Gardner", "Mel Karnofsky"],
		correctAnswer: "Nanette Guzman"
	},
	{
		question: "Q:In the episode 'High Holidays', Niles decides to try a pot brownie. Which character unwittingly eats the brownie?",
		answers: ["Martin", "Roz", "Daphne", "Frasier"],
		correctAnswer: "Martin"
	},
	{
		question: "Q:What is the name of the zoologist supermodel that Frasier secretly dated?",
		answers: ["Faye Moskowitz", "Charlotte Connor", "Kelly Easterbrook", "Cheryl Tiegs"],
		correctAnswer: "Kelly Easterbrook"
	},
	{
		question: "Q:Where in Seattle is Cafe Nervosa located?",
		answers: ["Delaware and Third", "11th and Pike", "3rd and Pike", "6th Avenue and John Street"],
		correctAnswer: "3rd and Pike"
	},
	{
		question: "Q:In the episode 'Mary Christmas', Frasier co-hosts the Seattle Christmas parade. What word is missing in this line of prepared banter: 'Hey Kelly, have you ever seen eighty ____ march in perfect rhythm?' ",
		answers: ["Beavers", "Deer", "Mice", "Raccoons"],
		correctAnswer: "Beavers"
	}
];

// // when the start button is clicked execute the run function

$("#start").on("click", run);

// // run function 
function run() {

// add trivia questions to the #content div on click
	$("#content").empty();

// 
for (var i = 0; i<triviaQA.length; i++) {

	var question = $("<p>");
	question.text(triviaQA[i].question);
	$("#content").append(question);

		for (var j = 0; j<triviaQA[i].answers.length; j++) {
		var answer = $("<label>");
		answer.addClass("radio-inline");

		var input = $("<input>");
		input.attr({"type" : "radio", "name" : "question" + i , "value" : triviaQA[i].answers[j]});

		answer.text(triviaQA[i].answers[j]);
		answer.append(input);
		$("#content").append(answer); 
		console.log(input.val());

		}	
	}
}


