let courseInitiativeStatus = {
    passed: ["A@com", "B@.com"]
}

const membersCanCreate = ["a@com", "c@com"]


courseInitiativeStatus.passed = courseInitiativeStatus.passed.filter(i => !membersCanCreate.some(j => j.toLowerCase() === i.toLowerCase()))

console.log(courseInitiativeStatus)