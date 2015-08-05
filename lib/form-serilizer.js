function FormSerilizer() {

}

FormSerilizer.checkResult = function(val, result) {
  var objResult = {};
  for (var i = 0; i < result.length; i++) {
    if (result[i].name === val.name) {
      result[i].value.push(val.value);
      return;
    }
  }
  objResult = {
    name: val.name,
    type: val.type,
    value: [val.value]
  };
  result.push(objResult);
};



FormSerilizer.prototype.formScan = function(form) {
  var result = [];
  var that = this;
  [].forEach.call(form, function(val) {
    if (val.type === 'text' || val.checked) {
      FormSerilizer.checkResult(val, result);
    }
  });
  return result;
};
