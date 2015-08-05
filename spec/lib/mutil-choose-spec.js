describe("mutilChoose test",function() {
  var theMutilChoose = new MutilChoose('3-1','checkbox',['A','B','C','D']);
  it("check name,value and type",function() {
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
