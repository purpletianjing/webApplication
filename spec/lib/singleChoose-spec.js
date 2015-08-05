describe("singleChoose-test",function(){
  var singleChoose;
  var answer;
  beforeEach(function() {
    singleChoose = new SingleChoose('1-1','text',['A']);
    answer = [{name:'1-1',value:['A'],score:3},
                  {name:'2-1',value:['B'],score:3},
                  {name:'3-1',value:['A','B','C'],score:3}];
    SingleChoose.getCorrectAnswer(answer);
  });
  it("check name,type and value",function() {
    expect(singleChoose.name).toBe('1-1');
    expect(singleChoose.type).toBe('text');
    expect(singleChoose.value).toEqual(['A']);
  });
  it("get score",function() {
    expect(singleChoose.getScore()).toBe(3);
  });
});
