function TitleScore() {
  this.allTitles = [];
}

TitleScore.prototype.addTitle = function(scanResult,correctAnswer) {
  var that = this;
  scanResult.forEach(function(val) {
    if(val.type === 'text') {
      var theFill = new MutilFill(val.name,val.type,val.value);
      that.allTitles.push(theFill);
      MutilFill.getCorrectAnswer(correctAnswer);
    } else if (val.type === 'radio') {
      var theSingleChoose = new SingleChoose(val.name,val.type,val.value);
      that.allTitles.push(theSingleChoose);
      SingleChoose.getCorrectAnswer(correctAnswer);
    } else if (val.type === 'checkbox') {
      var theMutilChoose = new MutilChoose(val.name,val.type,val.value);
      that.allTitles.push(theMutilChoose);
      MutilChoose.getCorrectAnswer(correctAnswer);
    }
  });
  this.allTitles = that.allTitles;
};

TitleScore.prototype.getTotalScore = function() {
  var totalScore = 0;
  this.allTitles.forEach(function(val) {

    totalScore += val.getScore();
  });
  return totalScore;
};
