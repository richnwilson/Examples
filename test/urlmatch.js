const req = {
    body: [
        { email: 'rwilson@us.ibm.com', url: 'https://localhost:5000/api/surveys/1234/yes'},
        { email: 'rwilson@us.ibm.com', url: 'https://localhost:5000/homepage'},
        { email: 'rwilson@us.ibm.com', url: 'https://localhost:5000/api/surveys/1234/yes'},               
        { email: 'rwilson@us.ibm.com'},
        { email: 'richnwilson@gmail.com', url: 'https://localhost:5000/api/surveys/1234/yes'}                
    ]
}
const MATCHREPLYLINK = /.*\/api\/surveys\/(.*)\/(.*)/;
const events = req.body.map(({ email, url }) => {
    email = email || '';
    url = url || 'https://empty';
    const pathname = new URL(url).pathname;
    const fields = pathname.match(MATCHREPLYLINK);
    if (fields !== null && fields.length === 3) return {email, surveyId: fields[1], choice: fields[2]}
}).filter(event => typeof event !== 'undefined');
const eventsFilter = events.filter((value,index,array) => typeof value !== 'undefined' && array.findIndex(t=>t.surveyId === value.surveyId && t.email === value.email) === index );

console.log(eventsFilter);