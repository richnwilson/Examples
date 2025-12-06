const data = {
    "$set": {
        "status": "open",
        "collaborators.$[a].email": "rwilson@us.ibm.com",
        "collaborators.$[a].name": "Richard Wilson",
        "collaborators.$[a].talentId": "7D5656897"       
    },
    "$push": {

        "social.comments": {

           "name": "rwilson@us.ibm.com",
           "message": "test 2",
           "date": "2012-01-11T03:34:54Z"
         },
    },
    "$pull": {
         "social.likes": "theresac@us.ibm.com"
   },
   "$addToSet": {
    "collaborators": {
      "$each": [
        {
          "type": "sponsor",   
          "name": "Gisela Orozco Robles",
          "email": "gisela.orozco@ibm.com",
          "talentId": "071047781"
        }
      ]
     }   
    }   
}
const set = data?.$set || {};
const push = data?.$push || {};
const pull = data?.$pull || {};
const addToSet = data?.$addToSet || {};

const method = {
    "set": "added/updated: ",
    "push": "updated to: ",
    "pull": "removed from: ",
    "addToSet": "updated to: "
}

let newDataAdded = false
let action = ''
let isPush = false;
for (const type of ["set","pull","push","addToSet"]) {
    if (Object.keys(eval(type)).length > 0) {
        newDataAdded = true;
        if (type === 'push') isPush = true;
        if (type === 'addToSet' && isPush) {
            action += ", ";
        } else {
            action += `${action.length === 0 ? '' : '; '}${method[type]}`
        }
        let arrayFilters = false
        for (const [index, [key, value]] of Object.entries(Object.entries(eval(type)))) {
            if (key.search(/^.*\$\[.*/) === 0) {
                if (!arrayFilters) {
                    action += `${index === '0' ? '' : ', '}${key.replace(/^(.*)\.\$\[.*/, "$1")}`
                    arrayFilters = true
                } 
                continue
            }
            action += `${index === '0' ? '' : ', '}${key}`
        }   
    }
}

console.log(action)