let data = {
 "key1": {
    "a" : {
       "*": {
          "key11": {
             "aa": 1
           }
        }
     }
  },
  "*": {
     "key2": {
         'b': 5
      }
  }
}
function constructObj(data, finalObj) {
   for(let a in data) {
      if(a === '*') {
         return constructObj(data[a], {});
      } else if(typeof data[a] === 'object' && data[a] !== null) {
             finalObj[a] = constructObj(data[a], {});
             return finalObj;
      } else {
         finalObj[a] = data[a];
         return finalObj;
      }
   }
   return finalObj;
}

let f = {};
for(let b in data) {
   if(b === '*') {
     f = Object.assign({}, f, constructObj(data[b], {}))
   } else {
     f[b] = constructObj(data[b], {});
   }
}
