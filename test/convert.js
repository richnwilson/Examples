const x = [
    {
      missingWorkLoc: [
        {
          mail: "snitzer@us.ibm.com",
          workloc: "HG6",
        },
        {
          mail: "chris_nott@uk.ibm.com",
          workloc: "BDF",
        },
        {
          mail: "zhlin@us.ibm.com",
          workloc: "GZ7",
        },
        {
          mail: "rewiest@us.ibm.com",
          workloc: "PIC",
        },
        {
          mail: "harishan@us.ibm.com",
          workloc: "GZ7",
        },
        {
          mail: "teresah@us.ibm.com",
          workloc: "GZ6",
        },
      ],
      missingReportToChain: [
      ],
      missingOrgCodes: [
      ],
      missingW3Services: [
      ],
      missingCountryMap: [
      ],
      missingSlackId: [
        {
          mail: "ajayapte@us.ibm.com",
        },
        {
          mail: "boc@us.ibm.com",
        },
        {
          mail: "debasis@ibm.com",
        },
        {
          mail: "alperb@us.ibm.com",
        },
        {
          mail: "jolson@us.ibm.com",
        },
        {
          mail: "kailash@us.ibm.com",
        },
        {
          mail: "jcandido@br.ibm.com",
        },
        {
          mail: "Ramesh.Pathak@ibm.com",
        },
        {
          mail: "dennard@us.ibm.com",
        },
        {
          mail: "sujnandi@in.ibm.com",
        },
        {
          mail: "wolfgang@us.ibm.com",
        },
      ],
    },
  ]


 function format(data)  {
    let output="";
    for (const [key, value] of Object.entries(data)) {
        const values = value.map(i=> {
            const secondary = typeof i[Object.keys(i)[1]] !== 'undefined' ? `: (${i[Object.keys(i)[1]]})` : '';
            return `  - ${i[Object.keys(i)[0]]}${secondary}`});
        output += `\r\n${key}: (${value.length})\r\n${values.join('\r\n')}`;
    }
    return output
 }

  console.log(format(x[0]))