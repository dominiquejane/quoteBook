var app = angular.module('quoteBook');
app.service('mainService', function() {

	

	if(!localStorage.quotes) { //check if the quotes object is stored, if it's not, then set it equal to the default values below:

		var quotes = [
	    { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
	    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
	    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
	    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
	    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
	    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
	    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
	  ];

	  localStorage.quotes = JSON.stringify(quotes); //change the quotes object into a valid format for storage, i.e. string.
	}
	else {
		var quotes = JSON.parse(localStorage.quotes);
		// var quotes = JSON.parse(quotes); //if quotes already exists in the storage then change it back into an object for manipulation
		console.log(quotes); //check to see if it parsed/loaded correctly
	}

  this.getData = function() {
  	console.log(quotes);
 		return quotes;
  };

  this.addData = function(inputData) {
  		var newobj = {}
  		for(var prop in inputData) {
  			newobj[prop] = inputData[prop];
  		}

  	if (newobj.text && newobj.author) {
  		quotes.unshift(newobj);
  		console.log(newobj);

  		localStorage.quotes = JSON.stringify(quotes);  //store all the new quotes + old quotes as a new quote object into the storage and change it to valid string format
  	}
  	else if (!newobj.text && newobj.author) {
  		alert("Please enter a quote!");
  	}
  	else if (newobj.text && !newobj.author) {
  		alert("Who said this quote? Type 'Anonymous' if you do not know.")
  	}
  	else {
  		alert("Please input a quote and its author!")
  	}

		

  };

  this.removeData = function(line)  {
  	for(var i = 0; i < quotes.length; i ++) {
  		if(line === quotes[i].text) {
  			quotes.splice(i,1);
  		}
  	}
  	localStorage.quotes = JSON.stringify(quotes); 
  	return quotes;
  	
  };

});