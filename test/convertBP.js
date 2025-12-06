const data = {
    search: {
      entry: [
        {
          dn: "uid=023306758,c=it,ou=bluepages,o=ibm.com",
          attribute: [
            {
              name: "telephonenumber",
              value: [
                "39-335-7208581",
              ],
            },
            {
              name: "preferredfirstname",
              value: [
                "Antonella",
              ],
            },
            {
              name: "workloc",
              value: [
                "C7Z",
              ],
            },
            {
              name: "mail",
              value: [
                "abertolet@it.ibm.com",
                "75823306@it.ibm.com",
              ],
            },
            {
              name: "uid",
              value: [
                "023306758",
              ],
            },
            {
              name: "ibmserialnumber",
              value: [
                "023306",
              ],
            },
            {
              name: "jobresponsibilities",
              value: [
                "Customer Success Manager, IBM Technology Sales, Italy",
              ],
            },
            {
              name: "hrorganizationcode",
              value: [
                "AX",
              ],
            },
            {
              name: "preferredlastname",
              value: [
                "Bertoletti",
              ],
            },
            {
              name: "employeecountrycode",
              value: [
                "758",
              ],
            },
            {
              name: "notesemail",
              value: [
                "CN=Antonella Bertoletti/OU=Italy/O=IBM@IBM",
              ],
            },
          ],
        },
        {
          dn: "uid=023361897,c=us,ou=bluepages,o=ibm.com",
          attribute: [
            {
              name: "telephonenumber",
              value: [
                "1-845-435-4160",
              ],
            },
            {
              name: "preferredfirstname",
              value: [
                "Anuja",
              ],
            },
            {
              name: "workloc",
              value: [
                "PLP",
              ],
            },
            {
              name: "mail",
              value: [
                "anujad@us.ibm.com",
              ],
            },
            {
              name: "uid",
              value: [
                "023361897",
              ],
            },
            {
              name: "ibmserialnumber",
              value: [
                "023361",
              ],
            },
            {
              name: "jobresponsibilities",
              value: [
                "STSM, z Systems Architect, IBM AoT member",
              ],
            },
            {
              name: "hrorganizationcode",
              value: [
                "UC",
              ],
            },
            {
              name: "preferredlastname",
              value: [
                "Deedwaniya",
              ],
            },
            {
              name: "employeecountrycode",
              value: [
                "897",
              ],
            },
            {
              name: "notesemail",
              value: [
                "CN=Anuja Deedwaniya/OU=Poughkeepsie/O=IBM@IBM",
              ],
            },
          ],
        }
      ],
      return: {
        code: 0,
        message: "Success",
        count: 50,
      },
    },
  };

  const x = data.search.entry.reduce(
    (acc,cur) =>acc.concat(cur.attribute.map(obj=>{
      let rObj = {};
      rObj[obj.name] = obj.value[0].toString();
      return rObj;
    })),[]
  )
  console.log(x);