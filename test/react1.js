const tasks = [{id: 1, what: 'Doctors appointment', when: 'Jan 13th at 1.30pm MST', reminder: false},{id: 2, what: 'School meeting', when: 'Jan 14th at 2.30pm MST', reminder: false}];

console.log([...tasks, {id: 3, what: 'Managers meeting', when: 'Jan 15th at 3.30pm', reminder: true}]);