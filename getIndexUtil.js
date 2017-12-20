// Test Objects
let obj1 = {
  a: 1,
  b: [2,3,4,5,6],
  c: {
    d: 7,
    e: [8,9,10],
  },
}

let obj2 = {
  a: [
    {
      b: {
        c: 3,
      },
    }
  ],
};

let obj3 = {
  a: {
    b:{
      c: 3,
    },
  },
};

// Path Format : 'a.b.z.d, where a,b and d are keys of the Object and z belongs to the natural numbers
// DefaultValue: Any value

let getIn = (object, path, defaultValue) => {
  // The object variable is an Object or an Array ?

  let result = defaultValue;
  let splitPath = path.split('.');

  if (splitPath.length < 1 && splitPath[0] !== "") return defaultValue;

  let currentKey = splitPath.splice(0,1)[0];
  let objectKeyValidation = false;

  if (Array.isArray(object)) {
    objectKeyValidation = /^\+?(0|[1-9]\d*)$/.test(currentKey) && ~~currentKey >= 0 && ~~currentKey <= object.length - 1;
  } else {
    objectKeyValidation = object.hasOwnProperty(currentKey);
  }

  result = objectKeyValidation 
            ? !((object[currentKey]) instanceof Object || (object[currentKey]) instanceof Array) 
              ? object[currentKey] 
              : getIn(object[currentKey], splitPath.join('.'), defaultValue)
            : defaultValue;

  return result;
}


