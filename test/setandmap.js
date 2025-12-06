// Working with sets - stores unique items only

const set = new Set(['oreo','marshmellow', 'oreo', 'kitkat']);
set.add('donut');
set.add({'oreo-light': 'yes', 'oreo-dark': 'no'});
set.delete('kitkat');
console.log(set.has('kitkat'));

console.log(`${[ ...set]} - has length of ${set.size}`);

//Unfortunately no way to match to existing object ;(
set.add({'oreo-light': 'yes', 'oreo-dark': 'no'});
console.log(`${[ ...set]} - has length of ${set.size}`);

let iterator = set.values();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for (let iter of set) {
    console.log(iter);
  }

set.clear();
console.log(set);

// Working with Maps

const users = new Map();
console.log(users);

users.set('Richard N. Wilson', {email: 'rwilson@us.ibm.com'});
users.set('Paulo Moreno', {email: 'pmoreno@us.ibm.com'});
users.set('Richard N. Wilson', {email: 'richnwilson@gmail.com'});
console.log(users);

console.log(users.has('Rich Wilson'));
console.log(users.get('Richard N. Wilson'));

for (let user of users) {
    console.log(`[for...of]: ${user}`);
  }
  
users.forEach((value, key) => console.log('[__forEach()]:  ', key, value));  