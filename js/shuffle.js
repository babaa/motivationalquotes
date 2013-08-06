// Thank you Michael Corrigan for this nice shuffle! http://blog.corrlabs.com/2011/02/shuffling-object-properties-in.html

Array.prototype.shuffle = function(){
  for (var i = 0; i < this.length; i++){
      var a = this[i];
      var b = Math.floor(Math.random() * this.length);
      this[i] = this[b];
      this[b] = a;
  }
}

function shuffleProperties(obj) {
  var new_obj = {};
  var keys = getKeys(obj);
  keys.shuffle();
  for (var key in keys){
      if (key == "shuffle") continue; // skip our prototype method
      new_obj[keys[key]] = obj[keys[key]];
  }
  return new_obj;
}

function getKeys(obj){
    var arr = new Array();
    for (var key in obj)
        arr.push(key);
    return arr;
}
