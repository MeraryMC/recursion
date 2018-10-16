// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var arrayOfValues = [];
  if (obj === null || obj === undefined ) {
    return 'null'
  }
  if (typeof(obj) === 'number' || typeof(obj) === 'symbol' || typeof obj === 'boolean') {
    return String(obj)  
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"'
  }
  if(Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    }
    for (var i = 0; i < obj.length; i++) {
      arrayOfValues.push(stringifyJSON(obj[i]));
    }
    return '[' + arrayOfValues + ']';
  }

  if (obj instanceof Object) {
    for (var key in obj) {
      if(obj[key] instanceof Function) {
        return '{}';
      } else {
        arrayOfValues.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return ( '{' + arrayOfValues + '}');
  }
};

 


