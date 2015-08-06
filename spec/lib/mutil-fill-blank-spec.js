describe("mutilFillBlank test",function() {
  var answer;
  var mutilFill;
  beforeEach(function() {
    //mutilFill = new MutilFill('2-1','text',['多态','继承','多态']);
    mutilFill = new MutilFill('2-1','text',['多态',]);
  //  answer = [{name:'2-1',type:'text',value:['多态','继承','封装']}];
    answer = [{name:'2-1',type:'text',value:['多态']}];
  });
  it("check his name,type and value",function() {
    expect(mutilFill.name).toBe('2-1');
    expect(mutilFill.type).toBe('text');
    expect(mutilFill.value).toEqual(['多态']);
  });
  it("get score",function(){
    MutilFill.getCorrectAnswer(answer);
    expect(mutilFill.getScore()).toBe(1);
  });
});
