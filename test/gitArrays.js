const x = [
    { "id" : 1,
      "name" : "Init:Status:Open"
    },
    { "id" : 2,
      "name" : "Init:Status:RFP"
    },
    { "id" : 3,
      "name" : "Init:Rated"
    }];

// console.log(x.reduce((a, c) => {
//         if (c.name.toLowerCase().includes('init:status')) {
//             a.push(c.name);
//         } return a 
//     }, []));

console.log(x.reduce((a, c) => { (c.name.toLowerCase().includes('init:status') && a.push(c.name)), }, []));