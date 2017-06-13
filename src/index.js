function chop(searchVal, array) {
  if( arguments.length !== 2 ){
    throw 'invalid number of arguments';
  }
  if(typeof arguments[0] !== 'number' ) {
    throw 'first argument must be a number';
  }
  if(arguments[0] % 1 !== 0){
    throw 'first argument must be an integer'
  }
  return searchVal;
}
