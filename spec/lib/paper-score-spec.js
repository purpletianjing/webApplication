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
  // it(" check allTitles[0]'info ", function() {
  //   expect(theTitleScore.allTitles[0].type).toBe('text');
  //   expect(theTitleScore.allTitles[0].name).toBe('1-1');
  //   expect(theTitleScore.allTitles[0].value).toEqual(['多态','多态','继承']);
  // });
  // it(" check allTitles[1]'info ", function() {
  //   expect(theTitleScore.allTitles[1].type).toBe('radio');
  //   expect(theTitleScore.allTitles[1].name).toBe('2-1');
  //   expect(theTitleScore.allTitles[1].value).toEqual(['A']);
  // });
  // it(" check allTitles[0]'info ", function() {
  //   expect(theTitleScore.allTitles[2].type).toBe('checkbox');
  //   expect(theTitleScore.allTitles[2].name).toBe('3-1');
  //   expect(theTitleScore.allTitles[2].value).toEqual(['A','C','D']);
  // });

  it("the allTitles's length",function() {
    expect(theTitleScore.allTitles.length).toBe(3);
  })
  it(" get total score ",function(){
    expect(theTitleScore.getTotalScore()).toBe(4);
  });
});
