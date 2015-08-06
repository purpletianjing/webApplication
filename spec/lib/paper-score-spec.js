describe("paper-score", function() {
  var theTitleScore;
  var scanResult = [];
  var correctAnswer = [];
  beforeEach(function() {
    theTitleScore = new TitleScore();
    scanResult = [{
      type: 'text',
      name: '1-1',
      value: ['多态', '多态', '继承']
    }, {
      type: 'radio',
      name: '2-1',
      value: ['A']
    }, {
      type: 'checkbox',
      name: '3-1',
      value: ['A', 'C', 'D']
    }];
    correctAnswer = [{
      name: '1-1',
      value: ['多态', '封装', '继承'],
      score: 3
    }, {
      name: '2-1',
      value: ['A'],
      score: 2
    }, {
      name: '3-1',
      value: ['A', 'D'],
      score: 3
    }];
    theTitleScore.addTitle(scanResult,correctAnswer);
  });

  it("the allTitles's length",function() {
    expect(theTitleScore.allTitles.length).toBe(3);
  });
  it(" get total score ",function(){
    expect(theTitleScore.getTotalScore()).toBe(4);
  });
});
