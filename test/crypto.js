import crypto from 'crypto';

let algorithm = 'aes-256-cbc'; 
let key = '!-oicNEWdigitalproperties^2024^!'; // With aes256 must exactly 32 characters required below
let text = JSON.stringify({ user : {
    emailAddress: 'rwilson@us.ibm.com'
}})
console.log('[text]:', text);
let iv = "ThisISOIC2024^^^" // With aes256 must exactly 36 characters required below

let cipher = crypto.createCipheriv(algorithm, key, iv);  
let encrypted = `${cipher.update(text, 'utf8', 'hex')}${cipher.final('hex')}`;
console.log('[encrypted]:', encrypted);
let decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = `${decipher.update(encrypted, 'hex', 'utf8')}${decipher.final('utf8')}`;
console.log('[decrypted]:', decrypted);