import jwt  from 'jsonwebtoken';
const claims = { sub: '213123123123' , email: 'rwilson@us.ibm.com' };
const token = jwt.sign(claims, '$OICDigitalProperties$');
console.log(token);

console.log(jwt.verify(token, '$OICDigitalProperties$'))


import crypto from 'crypto';

let algorithm = 'aes256'; 
//let key = 'adasdsadsadsadsdfsdfdsfdsfsdsade'; // With aes256 must exactly 32 characters required below
let key = '!-oicNEWdigitalproperties^2024^!';
let text = 'rwilson@us.ibm.com';
console.log('[text]:', text);
//let iv = "OICoicOICoic1234" // With aes256 must exactly 36 characters required below
let iv = "ThisISOIC2024^^^" // With aes256 must exactly 36 characters required below

let cipher = crypto.createCipheriv(algorithm, key, iv);  
let encrypted = `${cipher.update(text, 'utf8', 'hex')}${cipher.final('hex')}`;
console.log('[encrypted]:', encrypted);
let decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = `${decipher.update(encrypted, 'hex', 'utf8')}${decipher.final('utf8')}`;
console.log('[decrypted]:', decrypted);