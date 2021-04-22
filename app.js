// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

//ES2015 version of filterOutOdds
const filterOutOdds = (...args) => args.filter((num) => num % 2 === 0);


//findMin

const findMin = (...args) => Math.min(...args);

//merge objects

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});


//double and return argsc

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(n=> n*2)];

//slice and dice
const removeRandom = items => { 
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

//extend

const extend = (arr1, arr2) => [...arr1, ...arr2];

//add key/value

const addKeyVal = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}

//removeKey

const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}

//combine

const combine = (obj1, obj1) => {
    let newObj = {...obj1, obj1};
    return newObj;
}

//update
const update = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}
