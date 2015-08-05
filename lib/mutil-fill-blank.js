var answer;
function MutilFill(name,type,value) {
  this.name = name;
  this.type = type;
  this.value = value;
}

MutilFill.getCorrectAnswer = function(correctAnswer) {
  answer = correctAnswer;
};

MutilFill.reduceRepeat = function(result,value) {
  var resultObject = {};
  value.forEach(function(val) {
    if(resultObject[val] !== 1) {
      resultObject[val] = 1;
      result.push(val);
    }
  });
};

MutilFill.everyBlank = function(value,score) {
  for (var i = 0; i < answer.length; i++) {
    if(answer[i].value.indexOf(value) !== -1) {
      score++;
      return score;
    }
  }
};

MutilFill.prototype.getScore = function() {
  var score = 0;
  var result = [];
  MutilFill.reduceRepeat(result,this.value);
  result.forEach(function(val) {
    score = MutilFill.everyBlank(val,score);
  });
  return score;
};
