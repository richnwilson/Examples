function find_duplicate_in_array(arra1) {
    const object = {};
    const result = [];

    arra1.forEach(item => {
      litem = item.trim().toLowerCase();
      if(!object[litem])
          object[litem] = 0;
        object[litem] += 1;
    })

    for (const prop in object) {
       if(object[prop] >= 2) {
           result.push(prop);
       }
    }

    return result;

}

console.log(find_duplicate_in_array(["rwilson@us.ibm.com","andy.m.ramos@ibm.com","RWilson@us.ibm.com","rwilso@us.ibm.com","Andy.M.Ramos@ibm.com"]));