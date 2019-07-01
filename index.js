/*  run test to see what it wants
create an object called recipes
use Object.assign to make a new object that has the original K-V pair, and the new ones while leaving the original intact
Curly brackets to create target object to store the new clone

*/

var recipes = {key: 'value'};

function updateObjectWithKeyAndValue(object, key, value) {
  
  return Object.assign({}, object, {[key] : value});
}


/* update the existing object and return the updated one.
first is destroyed because because we changed it in the function
*/
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  
    return object;
}

/* create a new object to store clone
    use Object.assign to make a new object and give it the properties of the first
    use DELETE to remove the key from the clone 

*/
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

/*

*/
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  
    return object;
}