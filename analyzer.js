var analyze = function(){
	var text = document.getElementById('text-area').value;
	var wordStore = {};
	var sortedWords = [];
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
		if(!sortedWords[j].text){
			console.log(sortedWords[j])
		}
		var newText = document.createTextNode(sortedWords[j].text + ': ' + sortedWords[j].counter)
		newP.appendChild(newText);
		results.appendChild(newP)
	}
}