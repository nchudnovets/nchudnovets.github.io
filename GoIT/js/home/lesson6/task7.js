var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

function anClean(arr){
  var sortedWords = [];
  var output = [];
  var cleanIndexes = [];
  
  arr.forEach(function(word, i, arr){
                                    sortedWords.push( word.toLowerCase().split('').sort().join('') );
                                    }
             );
  
  for(var i = 0; i < sortedWords.length; i++){
    if(output.indexOf(sortedWords[i]) < 0){
      output.push(sortedWords[i]);
      cleanIndexes.push(i);
    };
  };
  
  output = [];
  
  cleanIndexes.forEach(function(index, i, cleanIndexes){
                                                        output.push(arr[index]);
                                                        }
                      );
  
  return output;
};



anClean(arr);