const arrayMemberTypes = ["isAcademyMember", "isAffiliateLeader"];
console.log(`$or: ${JSON.stringify(arrayMemberTypes.map(i => ({[i]: 'Yes'})))}`)