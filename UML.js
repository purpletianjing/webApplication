document.getElementById("sno").addEventListener('keydown',function(evt) {
  console.log(String.fromCharCode(evt.keyCode));
  if(((evt.keyCode < 49) || (evt.keyCode > 57)) && evt.keyCode !== 8) {
    evt.preventDefault();
  }
});

var choosetext1 = document.getElementsByName('choose1');


function getResult() {
  var result = [].filter.call(choosetext1,function(elem) {
    return elem.checked;
  }).map(function(val) {
    return val.value;
  });
  return result.join("-");
}

//document.getElementById('chooseText1').value = getResult();

  [].forEach.call(choosetext1,function(element) {
    var result = [];
    element.addEventListener('click',function() {
      //result.push(getResult());
      document.getElementById('chooseText1').value = getResult();
    });
  });

  function verity() {
    var result = [];
    var name = document.getElementsByName('info');
    result = [].map.call(name,function(input) {
      if(input.value === '') {
        return input.id;
      }
    });
    var string = '' + result.join(" ") + '不能为空';
    alert(string);
    // if(name.value === '') {
    //   alert("name can't be blank");
    // }
  }
