describe("singleChoose-test",function(){
  var singleChoose = new SingleChoose('1-1','text',['A']);
  beforeEach(function() {
    singleChoose = new SingleChoose('1-1','text',['A']);
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
