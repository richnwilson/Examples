import axios from 'axios';

(async () => {
     try {
        const OPTIONS = {
            headers: {
                'accept': 'applicaton/vnd.github.v3+json', 
                "content-type": "application-json",
                'Authorization': 'token xxxxx',
            }
        }

        /* BACKGROUND
            -   Open Source data query and manipulation (mutation) language for APIs
            -   Released by Facebook (Meta) as Open Source in 2015, then moved to 'GraphQL Foundation' in 2018
            -   One of IBM's strategic Open Source projects
            -   Pros
                -   Single query or manipulation (as opposed to possible multi REST API calls)
                -   Can specify which data fields to return (as opposed to all in REST API calls)
                -   Can filter queries at field level
                -   Faster than multiple REST APIs
                -   Smaller payload
            -   Cons
                -   Need to be familiar with schema implementation of host (Apollo is a good explorer for testing / review)
                -   Might need to work with backend developer to enhance data fields/filters etc
        */

        const ORG = "innersource";
        const NAME = "innersource-portal-backend";

        // REQUIREMENT - Need to show for a given Git Repo a total distribution of Open and Closed issues (looking at last 100 for each) as well as the number of open pull requests

        // OLD WAY - MULTIPLE APIS that return entire JSON object
        let oldWay = {
            open: 0,
            closed: 0,
            pullRequests: 0
        }
        const start1 = Date.now();
        let payloadSize1 = 0;
        // 1. First API to get all details of last 100 open issues and then filter to determine counts
        const { data: open, headers: openHeaders } = await axios.get(`https://github.ibm.com/api/v3/repos/${ORG}/${NAME}/issues?state=open&per_page=100`, OPTIONS)
        payloadSize1 += parseInt(openHeaders?.['content-length']);
        oldWay.open = open.filter(i => i.state === 'open' ).length;

        // 2. Second API to get all details of last 100 closed issues and then filter to determine counts (need to remove pull requests)
        const { data: closed, headers: closedHeaders} = await axios.get(`https://github.ibm.com/api/v3/repos/${ORG}/${NAME}/issues?state=closed&per_page=100`, OPTIONS)
        oldWay.closed = closed.filter(i => i.state === 'closed' && !i?.pull_request ).length;
        payloadSize1 += parseInt(closedHeaders?.['content-length']);
        
        // 3. Third API to get pull requests that are open and determine count
        const { data: pullRequests, headers: pullRequestsHeaders } = await axios.get(`https://github.ibm.com/api/v3/repos/${ORG}/${NAME}/pulls?state=open&per_page=100`, OPTIONS)
        oldWay.pullRequests = pullRequests.length;
        payloadSize1 += parseInt(pullRequestsHeaders?.['content-length']);

        console.log(`Old Way: ${JSON.stringify(oldWay)} - execution time: ${Date.now() - start1}ms | payload Size: ${payloadSize1}b`);

        // NEW WAY - SINGLE query with only required fields in payload
        const start2 = Date.now();
        const { data: { data: {  repository }}, headers: graphQLHeaders} = await axios.post(`https://github.ibm.com/api/graphql`, {
            query: `{
                        repository(name: "${NAME}", owner: "${ORG}") {
                            open: issues(states:OPEN, last: 100) {
                                totalCount
                            }
                            closed: issues(states:CLOSED,last:100) {
                                totalCount
                            }
                            pullRequests(states:OPEN, last: 100) {
                                totalCount
                            }
                        }
                }`
        }, OPTIONS)
        const newWay = {
            open: repository.open.totalCount,
            closed: repository.closed.totalCount,
            pullRequests: repository.pullRequests.totalCount
        }
        console.log(`New Way: ${JSON.stringify(newWay)} - execution time: ${Date.now() - start2}ms | payload Size: ${graphQLHeaders?.['content-length']}b`);
     } catch(e) {
        console.log(e)
     }
})();