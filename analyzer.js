var simplify = {
	removeCommons: function(str){
		str = str.replace(/(?=for\b)\w+/gm,'')
		str = str.replace(/(?=the\b)\w+/gm,'')
		str = str.replace(/(?=or\b)\w+/gm,'')
		str = str.replace(/(?=and\b)\w+/gm,'')

		str = str.replace(/(?=to\b)\w+/gm,'')
		str = str.replace(/(?=from\b)\w+/gm,'')
		str = str.replace(/(?=a\b)\w+/gm,'')
		str = str.replace(/(?=on\b)\w+/gm,'')
		str = str.replace(/(?=which\b)\w+/gm,'')
		str = str.replace(/(?=there\b)\w+/gm,'')
		str = str.replace(/(?=he\b)\w+/gm,'')
		str = str.replace(/(?=him\b)\w+/gm,'')
		str = str.replace(/(?=she\b)\w+/gm,'')
		str = str.replace(/(?=her\b)\w+/gm,'')
		str = str.replace(/(?=they\b)\w+/gm,'')
		str = str.replace(/(?=them\b)\w+/gm,'')
		str = str.replace(/(?=we\b)\w+/gm,'')


		console.log(str)

		return str;
	}
}

var removeText = function(){
	var text = document.getElementById('text-area').value;
	
	var doThis = simplify.removeCommons(text);
	text = doThis
}
var analyze = function(){
	var text = document.getElementById('text-area').value;
	var wordStore = {};
	var sortedWords = [];
	//this removes new line characters
	text = text.replace(/(\r\n|\n|\r)/gm," ")
	//this would replace all the apstrophes etc.
	//text = text.replace(/(\W)/gm, ' ')
	text = text.replace(/(,|[.]|;|:|!|\[|\]|\)|\(|\{|\}|\?|")/gm,'')
	

	


	text = text.split(' ')
	console.log('text:', text)
	for(var i=0; i<text.length; i++){
		var word = text[i]
		word = word.toLowerCase().trim();
		word = word.replace('&#8220','').replace('&#8221', '').replace('"','').replace('&#8212','')
		if(word === ""){

			continue;
		}
		if(wordStore[word]){
			wordStore[word].counter +=1
		} else {
			wordStore[word] = {
				text: word,
				counter: 1
			}
		}
	}
	console.log(wordStore)
	for(var prop in wordStore){
		sortedWords.push(wordStore[prop])
	};

	sortedWords.sort(function(a, b){
		return b.counter-a.counter;
	})
	for(var j=0; j<sortedWords.length; j++){
		
		
		var results = document.getElementById('results')
		var newP = document.createElement('p')
		var newText = document.createTextNode(sortedWords[j].text + ': ' + sortedWords[j].counter)

		newP.appendChild(newText);
		results.appendChild(newP)
		

	}
}