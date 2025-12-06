'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('domino.json');
let domino = JSON.parse(rawdata).filter(i=> i.statCode === '0').map(i => i.internetaddress);


rawdata = fs.readFileSync('mongo.json');
let mongo = JSON.parse(rawdata).filter(i=> i.status === '0').map(i => i.internetAddress);

let difference = domino.filter(x => !mongo.includes(x));
console.log(difference);