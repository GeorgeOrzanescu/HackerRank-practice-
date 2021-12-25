// Given an array of integers, where all elements but one occur twice,
//find the unique element.

a = [3, 1, 3, 4, 1, 4, 3, 5, 5, 0];

function lonelyInteger_advanced(a) {
  var result = 0;
  for (var i = 0; i < a.length; i++) {
    result ^= a[i];
  }
  return result;
}

console.log(lonelyInteger(a));

function lonelyinteger_basic(a) {
  const obj = new Set(a).entries();
  for (const [key, value] of obj) {
    obj[key] = 0;
  }
  a.forEach((element) => {
    obj[element]++;
  });
  console.log(obj);

  for (let key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
}

console.log(lonelyinteger(a));
