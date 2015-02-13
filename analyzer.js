var analyze = function(){
	var text = document.getElementById('text-area').value;
	var wordStore = {};
	var sortedWords = [];

	text = text.split(' ')

	console.log('text:', text)
	for(var i=0; i<text.length; i++){
		var word = text[i]
		word = word.toLowerCase().trim();
		word = word.replace(',','').replace('.', '').replace(';', '').replace('(','').replace(')','').replace(':','')
		if(word ===""){

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

	for(var prop in wordStore){
		sortedWords.push(wordStore[prop])
	};

	sortedWords.sort(function(a, b){
		return b.counter-a.counter;
	})
	for(var j=0; j<=sortedWords.length; j++){
		var results = document.getElementById('results')
		var newP = document.createElement('p')
		var newText = document.createTextNode(sortedWords[j].text + ': ' + sortedWords[j].counter)
		newP.appendChild(newText);
		results.appendChild(newP)
	}
}