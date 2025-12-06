const e_i = ['a@gmail.com','b@gmail.com','c@gmail.com'];
const e_l = ['a','b','c'];
const n_i = ['E@gmail.com','A@gmail.com','D@gmail.com','e@gmail.com'];
const n_l = ['E','A','D','e'];

// const toAdd_i_l = n_i.filter(item=> !e_i.includes(item.toLowerCase()));
// console.log(toAdd_i_l);
// const toAdd_i = n_i.map((e,i) => toAdd_i_l.includes(e) ? i : undefined).filter(x => x !== undefined);
// const toAdd_l = toAdd_i.map(e => n_l[e]);
// console.log(toAdd_i);
// console.log(toAdd_l);

let n_i_u = [];
let n_l_u = [];

n_i.forEach((item,index) => {
    if (n_i_u.findIndex(i => item.toLowerCase() === i.toLowerCase()) === -1) {
        n_i_u.push(item);
        n_l_u.push(n_l[index]);
    }
})
console.log(n_i_u);
console.log(n_l_u);