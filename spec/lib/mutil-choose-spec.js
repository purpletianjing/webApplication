describe("mutilChoose test",function() {
  var answer = [];
  beforeEach(function() {
  answer = [{name:'1-1',value:['A'],score:3},
                  {name:'2-1',value:['B'],score:3},
                  {name:'3-1',value:['A','B','C','D'],score:3}];

  });
  var theMutilChoose = new MutilChoose('3-1','checkbox',['A','B','C','D']);
  it("check name,value and type",function() {
    MutilChoose.getCorrectAnswer(answer);
    expect(theMutilChoose.name).toBe('3-1');
    expect(theMutilChoose.type).toBe('checkbox');
    expect(theMutilChoose.value).toEqual(['A','B','C','D']);
  });
  it("get score",function() {
    expect(theMutilChoose.name).toBe('3-1');
    expect(theMutilChoose.type).toBe('checkbox');
    expect(theMutilChoose.getScore()).toEqual(3);
  });
});
