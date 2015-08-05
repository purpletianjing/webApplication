
function SingleChoose(name,type,value) {
  this.name = name;
  this.type = type;
  this.value = value;
}

SingleChoose.getCorrectAnswer = function(correctAnswer) {
  answer = correctAnswer;
};

SingleChoose.prototype.judgeAnswer = function(val,value) {
  if(val.value[0] === value[0]) {
    return val.score;
  }
  return 0;
};

SingleChoose.prototype.getScore = function() {
  var that = this;
  var score = 0;
  answer.forEach(function(val) {
    if(val.name === that.name) {
    score = that.judgeAnswer(val,that.value);
    }
  });
  return score;
};
