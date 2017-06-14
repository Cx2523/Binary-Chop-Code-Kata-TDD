function chop(searchVal, array) {

  if( arguments.length !== 2 ){
    throw 'invalid number of arguments';
  }
  if(typeof arguments[0] !== 'number' ) {
    throw 'first argument must be a number';
  }
  if(arguments[0] % 1 !== 0){
    throw 'first argument must be an integer';
  }
  if (!Array.isArray(array)){
    throw 'second argument must be an array';
  }
  if(!arguments[1].every(function(val){
    return typeof val === 'number';
  })){
    throw 'all array values must be numbers';
  };
  if(!arguments[1].every(function(val){
    return val % 1 === 0;
  })){
    throw 'all array values must be integers';
  };
  var isSorted = true;
  for (var i = 0; i < array.length - 1; i++){
    if(array[i + 1] < array[i]) {
      isSorted = false;
    }
  }
  if(!isSorted){
    throw 'the array must be sorted';
  }

  if (array.length === 0 ) {
    return -1;
  }
  if(array.length === 1) {
      if(array[0] !== searchVal) {
        return -1;
      }
      else {
        return 0;
      }
  }

  function bSearch(start, stop){

    var midpoint = Math.floor((stop - start) / 2) + start;

    if (array[midpoint] > searchVal) {
      stop = midpoint;
    } else if(array[midpoint] < searchVal ){
      start = midpoint + 1;
    }
    else {
      return midpoint;
    }

    if(stop === start){
      if(array[stop] === searchVal){
        return stop;
      }
      else {
        return -1;
      }
    } else {
      return bSearch(start, stop);
    }

  }

  return bSearch(0, array.length - 1);
}
