var answer;

function MutilChoose(name,type,value) {
  this.name = name;
  this.type = type;
  this.value = value;
}

MutilChoose.getCorrectAnswer = function(correctAnswer) {
  answer = correctAnswer;
};

MutilChoose.judgeAnswer = function(val,value) {
  var score = val.score;
  value.forEach(function(everyValue) {
    if(val.value.indexOf(everyValue) === -1) {
      score = 0;
    }
  });
  if(value.length < val.value.length && (score !== 0)) {
    score = 2;
  }
  return score;
};

MutilChoose.prototype.getScore = function() {
  var that = this;
  var score = 0;
  answer.forEach(function(val) {
    if(val.name === that.name) {
      score = MutilChoose.judgeAnswer(val,that.value);
    }
  });
  return score;
};
