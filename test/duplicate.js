let to = [ ];

let cc = [
  { recipient: "rwilson@us.ibm.com"},
  { recipient: "andy.m.ramos@ibm.com"},
  { recipient: "andy.m.ramos@ibm.com"}
];

let bcc = [
  { recipient: "pmoreno@us.ibm.com"},
  { recipient: "rwilson@us.ibm.com"},
  { recipient: "pmoreno@us.ibm.com"},
  { recipient: "andy.m.ramos@ibm.com"},
  { recipient: "paridhi@us.ibm.com"},
];


function removeDuplicateEmails(array){
   // Converts array into array of only strings, and then convert to Set to remove 
   // duplicated strings. After that, map it back to the format:
   //   recipient: <emailAddress>
   return Array.from(new Set(array.map(email => email.recipient)))
   .map(recipient => { 
       return {recipient} 
  });
}

to = removeDuplicateEmails(to);

cc = removeDuplicateEmails(cc);
cc = cc.filter(cc_email => to.every(to_email => to_email.recipient != cc_email.recipient));

const to_cc = to.concat(cc);

bcc = removeDuplicateEmails(bcc);
bcc = bcc.filter(bcc_email => to_cc.every(to_cc_email => to_cc_email.recipient != bcc_email.recipient));

console.log(`to: ${JSON.stringify(to)}\n------`);
console.log(`cc: ${JSON.stringify(cc)}\n------`);
console.log(`bcc: ${JSON.stringify(bcc)}\n------`);