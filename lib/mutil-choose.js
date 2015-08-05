var answer = [{name:'1-1',value:['A'],score:3},
              {name:'2-1',value:['B'],score:3},
              {name:'3-1',value:['A','B','C','D'],score:3}];

function MutilChoose(name,type,value) {
  this.name = name;
  this.type = type;
  this.value = value;
}

MutilChoose.judgeAnswer = function(val,value) {
  var score = 3;
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
