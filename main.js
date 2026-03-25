// map object
function myMap() {
    let arr = []
    function set(value,key) {
        arr[key] = value
    }
    function remove(value) {
        for(let i = 0; i < arr.length;i++) {
            if(arr[i] === value) {
                arr.splice(i, 1)
            }
        }
    }
   
    return {
        set,
        remove,
        getItems : () => arr,
        get : (key) => arr[key]
    }
}
const m = myMap();
m.set("eren",1)
m.set("mentes",2)
console.log(m.getItems())

// Array.prototype.map()
Array.prototype.myMapMethod = function(callback, thisArg) {
    const len = this.length;
    const result = new Array(len);

    for (let i = 0; i < len; i++) {
        if (i in this) {
            result[i] = callback.call(thisArg, this[i], i, this);
        }
    }

    return result;
};

// filter
function myFilter(arr, func) {
  let result = []

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      result.push(arr[i])
    }
  }

  return result
}

const f = myFilter()
let filteredEven = f(isEven)

console.log(filteredEven)

function isEven(element) {
    return element % 2 == 0
}

