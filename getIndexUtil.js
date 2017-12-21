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

let obj4 = {
  a: {
    d: 4,
    b:{
      c: {
        z: 3,
      },
    },
  },
};

// Object : Any object
// Path Format : 'a.b.d', where a,b and d can be keys of the Object or might belong to the natural numbers 
// DefaultValue: Any value

let getIn = (object, path, defaultValue) => {
  // The object variable is an Object or an Array ?

  let splitPath = path.split('.');
  let currentKey = splitPath.splice(0,1)[0];

  if (object === undefined) return defaultValue;
  if (splitPath.length < 1 && currentKey === "") return object;

  let result = getIn(object[currentKey], splitPath.join('.'), defaultValue)

  return result;
}
