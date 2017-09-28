// set global variables
var number = 46;

var intervalId;

var correctAnswers = 0;
// incorporated incorrectAnswers variable into game at the last minute
var incorrectAnswers;

// didn't have time to incorporate unanswered into the game
// var unanswered = 10;

// create an array of objects
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

// when the start button is clicked execute the run function

$("#start").on("click", run);

// run function 
function run() {

// add trivia questions to the #content div on click
	$("#content").empty();

// sets an interval and runs the decrement function once a second
	intervalId = setInterval(decrement, 1000);

// dynamically create questions and answers in html on click
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
		// console.log(input.val());
		}

	}

// I am 100% certain there is a way of doing the following actions using a loop and less specificity, but didn't get that far...
	$(":radio[name='question0']").change(function() {
		var userGuess0 = [];
		userGuess0.push(this.value);
			console.log(userGuess0);
			console.log("Cheers:" + userGuess0.lastIndexOf("Cheers"));
    		console.log("Monk:" + userGuess0.lastIndexOf("Monk"));
    		console.log("Wings:" + userGuess0.lastIndexOf("Wings"));
    		console.log("Golden Girls:" + userGuess0.lastIndexOf("Golden Girls"));

    	if (userGuess0.lastIndexOf("Cheers") > (userGuess0.lastIndexOf("Golden Girls") && userGuess0.lastIndexOf("Wings") && userGuess0.lastIndexOf("Monk"))) {
    			correctAnswers++;
    		}
    	console.log("Correct Answer Value: " + correctAnswers);
	})
	$(":radio[name='question1']").change(function() {
		var userGuess1 = [];
		userGuess1.push(this.value);
			console.log(userGuess1);
			console.log("KCAL:" + userGuess1.lastIndexOf("KCAL"));
    		console.log("KACL:" + userGuess1.lastIndexOf("KACL"));
    		console.log("CALK:" + userGuess1.lastIndexOf("CALK"));
    		console.log("KCLA:" + userGuess1.lastIndexOf("KCLA"));

    	if (userGuess1.lastIndexOf("KACL") > (userGuess1.lastIndexOf("KCAL") && userGuess1.lastIndexOf("CALK") && userGuess1.lastIndexOf("KCLA"))) {
    			correctAnswers++;
    		}
    	console.log("Correct Answer Value: " + correctAnswers);
	})
	$(":radio[name='question2']").change(function() {
		var userGuess2 = [];
		userGuess2.push(this.value);
			console.log(userGuess2);
			console.log("Poppy Delafield:" + userGuess2.lastIndexOf("Poppy Delafield"));
    		console.log("Roz Doyle:" + userGuess2.lastIndexOf("Roz Doyle"));
    		console.log("Amber Edwards:" + userGuess2.lastIndexOf("Amber Edwards"));
    		console.log("Ronee Lawrence:" + userGuess2.lastIndexOf("Ronee Lawrence"));

    	if (userGuess2.lastIndexOf("Roz Doyle") > (userGuess2.lastIndexOf("Poppy Delafield") && userGuess2.lastIndexOf("Amber Edwards") && userGuess2.lastIndexOf("Ronee Lawrence"))) {
    			correctAnswers++;
    		}
    	console.log("Correct Answer Value: " + correctAnswers);
	})
	$(":radio[name='question3']").change(function() {
		var userGuess3 = [];
		userGuess3.push(this.value);
			console.log(userGuess3);
			console.log("Elliott North Towers:" + userGuess3.lastIndexOf("Elliott North Towers"));
    		console.log("Seattle Bay Towers:" + userGuess3.lastIndexOf("Seattle Bay Towers"));
    		console.log("Queen Anne Towers:" + userGuess3.lastIndexOf("Queen Anne Towers"));
    		console.log("Elliott Bay Towers:" + userGuess3.lastIndexOf("Elliott Bay Towers"));

    	if (userGuess3.lastIndexOf("Elliott Bay Towers") > (userGuess3.lastIndexOf("Elliott North Towers") && userGuess3.lastIndexOf("Seattle Bay Towers") && userGuess3.lastIndexOf("Queen Anne Towers"))) {
    			correctAnswers++;
    		}
    	console.log("Correct Answer Value: " + correctAnswers);
	})
	$(":radio[name='question4']").change(function() {
		var userGuess4 = [];
		userGuess4.push(this.value);
			console.log(userGuess4);
			console.log("Thanks for talking Seattle:" + userGuess4.lastIndexOf("Thanks for talking Seattle"));
    		console.log("Good mental health:" + userGuess4.lastIndexOf("Good mental health"));
    		console.log("Be well Seattle:" + userGuess4.lastIndexOf("Be well Seattle"));
    		console.log("Thank you for listening:" + userGuess4.lastIndexOf("Thank you for listening"));

    	if (userGuess4.lastIndexOf("Good mental health") > (userGuess4.lastIndexOf("Thanks for talking Seattle") && userGuess4.lastIndexOf("Be well Seattle") && userGuess4.lastIndexOf("Thank you for listening"))) {
    			correctAnswers++;
    		}
    	console.log("Correct Answer Value: " + correctAnswers);
	})
	$(":radio[name='question5']").change(function() {
		var userGuess5 = [];
		userGuess5.push(this.value);
			console.log(userGuess5);
			console.log("Lilith Sternin:" + userGuess5.lastIndexOf("Lilith Sternin"));
    		console.log("Nanette Guzman:" + userGuess5.lastIndexOf("Nanette Guzman"));
    		console.log("Lana Gardner:" + userGuess5.lastIndexOf("Lana Gardner"));
    		console.log("Mel Karnofsky:" + userGuess5.lastIndexOf("Mel Karnofsky"));

    	if (userGuess5.lastIndexOf("Nanette Guzman") > (userGuess5.lastIndexOf("Lilith Sternin") && userGuess5.lastIndexOf("Lana Gardner") && userGuess5.lastIndexOf("Mel Karnofsky"))) {
    			correctAnswers++;
    		}
    	console.log("Correct Answer Value: " + correctAnswers);
	})
	$(":radio[name='question6']").change(function() {
		var userGuess6 = [];
		userGuess6.push(this.value);
			console.log(userGuess6);
			console.log("Martin:" + userGuess6.lastIndexOf("Martin"));
    		console.log("Daphne:" + userGuess6.lastIndexOf("Daphne"));
    		console.log("Frasier:" + userGuess6.lastIndexOf("Frasier"));
    		console.log("Roz:" + userGuess6.lastIndexOf("Roz"));

    	if (userGuess6.lastIndexOf("Martin") > (userGuess6.lastIndexOf("Roz") && userGuess6.lastIndexOf("Daphne") && userGuess6.lastIndexOf("Frasier"))) {
    			correctAnswers++;
    		}
    	console.log("Correct Answer Value: " + correctAnswers);
	})
	$(":radio[name='question7']").change(function() {
		var userGuess7 = [];
		userGuess7.push(this.value);
			console.log(userGuess7);
			console.log("Faye Moskowitz:" + userGuess7.lastIndexOf("Faye Moskowitz"));
    		console.log("Charlotte Connor:" + userGuess7.lastIndexOf("Charlotte Connor"));
    		console.log("Kelly Easterbrook:" + userGuess7.lastIndexOf("Kelly Easterbrook"));
    		console.log("Cheryl Tiegs:" + userGuess7.lastIndexOf("Cheryl Tiegs"));

    	if (userGuess7.lastIndexOf("Kelly Easterbrook") > (userGuess7.lastIndexOf("Faye Moskowitz") && userGuess7.lastIndexOf("Charlotte Connor") && userGuess7.lastIndexOf("Cheryl Tiegs"))) {
    			correctAnswers++;
    		}
    	console.log("Correct Answer Value: " + correctAnswers);
	})
	$(":radio[name='question8']").change(function() {
		var userGuess8 = [];
		userGuess8.push(this.value);
			console.log(userGuess8);
			console.log("Delaware and Third:" + userGuess8.lastIndexOf("Delaware and Third"));
    		console.log("11th and Pike:" + userGuess8.lastIndexOf("11th and Pike"));
    		console.log("3rd and Pike:" + userGuess8.lastIndexOf("3rd and Pike"));
    		console.log("6th Avenue and John Street:" + userGuess8.lastIndexOf("6th Avenue and John Street"));

    	if (userGuess8.lastIndexOf("3rd and Pike") > (userGuess8.lastIndexOf("Delaware and Third") && userGuess8.lastIndexOf("11th and Pike") && userGuess8.lastIndexOf("6th Avenue and John Street"))) {
    			correctAnswers++;
    		}
    	console.log("Correct Answer Value: " + correctAnswers);
	})
	$(":radio[name='question9']").change(function() {
		var userGuess9 = [];
		userGuess9.push(this.value);
			console.log(userGuess9);
			console.log("Beavers:" + userGuess9.lastIndexOf("Beavers"));
    		console.log("Deer:" + userGuess9.lastIndexOf("Deer"));
    		console.log("Mice:" + userGuess9.lastIndexOf("Mice"));
    		console.log("Raccoons:" + userGuess9.lastIndexOf("Raccoons"));

    	if (userGuess9.lastIndexOf("Beavers") > (userGuess9.lastIndexOf("Deer") && userGuess9.lastIndexOf("Mice") && userGuess9.lastIndexOf("Raccoons"))) {
    			correctAnswers++;
    		}
    	console.log("Correct Answer Value: " + correctAnswers);
	})
}
// decrement function
function decrement() {
	number--;
	// show the number in the emptied #game div
	$("#timer").html("<h2>Time Remaining: " + number + " Seconds<h2>");

	// once number hits zero...
	if (number === 0) {
		// run the stop function
		stop();
	}
}
// stop function
function stop() {
	// show the user's results in the #game div when time is up
	incorrectAnswers = 10 - correctAnswers;
	console.log(incorrectAnswers);
	$("#game").html("<h2>Time's Up!</h2><br><h3>You got " + correctAnswers + " correct.</h3><br><h3>You got " + incorrectAnswers + " incorrect.");
	

	// stop the timer (so it doesn't go into negative numbers)
	clearInterval(intervalId);
}

