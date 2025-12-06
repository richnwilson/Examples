import request from 'request';
import axios from 'axios';

/* TO DO
    -   In request for closure overlay, if select Showcase then need to add box link to asset and then we use that link in the body of the git issue
    -   Put the leaders/co-leaders name, email in body
    -   

*/

(async () => {
     try {
      const data = await axios({ url: "https://github.ibm.com/api/v3/repos/oic/asset-review-board-dev/issues/28", method: "get", data: {}, responseType: "json" ,headers: {accept: 'applicaton/vnd.github.v3+json', "Content-Type": 'application/json', Authorization: 'token xxx'}})
      console.log(data)

     } catch(e) {
        console.log(e)
     }
})()

// Get Public Repo details
// request({
//     url: 'https://api.github.com/repos/IBM/ibm-generative-ai/contributors',
//     method: 'get',  
//     json: true,
//     body: {
//         per_page: 1
//     },
//     headers: {
//         'accept': 'applicaton/vnd.github+json',    
//         'Content-Type': 'application/json',
//         'User-Agent': 'test',
//         'X-GitHub-Api-Version': '2022-11-28',
//         'Authorization': 'Bearer xxxx',
//     }
// }, function (error, response, body) {
//     try {
//         console.log(response.statusCode);
//         console.log(response.headers);
//         console.log(body);
//     } catch (e) {
//         console.error(e);

//     }
// })

// (async () => {
//      try {
//         const options = {
//             headers: {
//                 'accept': 'applicaton/vnd.github.v3+json',    
//                 'Content-Type': 'application/json',
//                 'Authorization': 'token xxx',
//             }
//         }
//         const data = await axios.post(`https://github.ibm.com/api/v3/repos/IBMAoT/aot-input/issues`, {
//             owner: "ibmaot",
//             title: "test",
//             assignees: ["rwilson"],
//             labels: ["feedback"],
//             body: "Example of feedback"
//         }, options)
//      console.log("here");

//      } catch(e) {
//         console.log(e)
//      }
// })

// Archive a list of repos
// (async () => {
//     try {
//         const options = {
//             headers: {
//                 'accept': 'applicaton/vnd.github.v3+json',    
//                 'Content-Type': 'application/json',
//                 'Authorization': 'token xxx',
//             }
//         }
//         const archiveRepos = await Promise.all(
//                                             [
//                                                 "agendaScheduler",
//                                                 "AoT-Migration-b2c",
//                                                 "AoT-Showcases",
//                                                 "AoTAPILb4",
//                                                 "AoTBase",
//                                                 "AoTDomino2Mongo",
//                                                 "AoTMembers",
//                                                 "AoTPoC",
//                                                 "AoTPrez",
//                                                 "AoTReports",
//                                                 "BAU",
//                                                 "Core-Cloud-Tech",
//                                                 "core-cognitive",
//                                                 "Core-STEM-TC",
//                                                 "Core-Systemic-Equity",
//                                                 "Domino",
//                                                 "emerging-technology",
//                                                 "i-code-aot-net",
//                                                 "i-coding-transformation",
//                                                 "I-Cognitive",
//                                                 "i-enterprise-cloud-native",
//                                                 "i-erubric",
//                                                 "i-mi-dashboard",
//                                                 "i-prevail2020-Poster-Sessions",
//                                                 "i-SRE-PoV-LA",
//                                                 "Main",
//                                                 "Mobile-Android",
//                                                 "Mobile-IoS",
//                                                 "Mobile-Main",
//                                                 "technology-focal",
//                                                 "Web-External"
//                                             ].map(async i => {
//             try {
//                 return await axios.patch(`https://github.ibm.com/api/v3/repos/IBMAoT/${i}`,{archived:true}, options)
//             } catch(e) {
//                 return {data: {name: i}, status: '403'}
//             }
//         }))
//         console.log(JSON.stringify(archiveRepos.map(i => `${i.data.name} - Status: ${i.status}`), null, 4));
//     } catch(e) {
//         console.log(e)  
//     }
// })();

// Delete a list of repos
// (async () => {
//     try {
//         const options = {
//             headers: {
//                 'accept': 'applicaton/vnd.github.v3+json',    
//                 'Content-Type': 'application/json',
//                 'Authorization': 'token xxx',
//             }
//         }
//         const archiveRepos = await Promise.all(
//                                             [
//                                                 "agendaScheduler",
//                                                 "AoT-Migration-b2c",
//                                                  "AoT-Showcases",
//                                                  "AoTAPILb4",
//                                                 "AoTBase",
//                                                 "AoTDomino2Mongo",
//                                                 "AoTMembers",
//                                                 "AoTPoC",
//                                                 "AoTPrez",
//                                                 "AoTReports",
//                                                 "BAU",
//                                                 "Core-Cloud-Tech",
//                                                 "core-cognitive",
//                                                 "Core-STEM-TC",
//                                                 // "Core-Systemic-Equity",
//                                                 "Domino",
//                                                 "emerging-technology",
//                                                 "i-code-aot-net",
//                                                 "i-coding-transformation",
//                                                 "I-Cognitive",
//                                                 "i-enterprise-cloud-native",
//                                                 "i-erubric",
//                                                 "i-mi-dashboard",
//                                                 "i-prevail2020-Poster-Sessions",
//                                                 "Mobile-Android",
//                                                 "Main",
//                                                 "Mobile-Android",
//                                                 "Mobile-IoS",
//                                                 "Mobile-Main",
//                                                 "technology-focal",
//                                                 "Web-External"
//                                             ].map(async i => {
//             try {
//                 return await axios.delete(`https://github.ibm.com/api/v3/repos/IBMAoT/${i}`, options)
//             } catch(e) {
//                 return {data: {name: i}, status: '403'}
//             }
//         }))
//         console.log(JSON.stringify(archiveRepos.map(i => `${i.request.path} - Status: ${i.status}`), null, 4));
//     } catch(e) {
//         console.log(e)  
//     }
// })();

//Get repo Id
// request({
//     url: 'https://github.ibm.com/api/v3/orgs/maximo-app-framework/repos?per_page=100',
//     method: 'get',  
//     json: true,
//     body: {
//     },
//     headers: {
//         'accept': 'applicaton/vnd.github.v3+json',    
//         'Content-Type': 'application/json',
//         'Authorization': 'token xxx',
//     }
// }, function (error, response, body) {
//     try {
//         console.log(response.statusCode);
//         console.log(body.map(i => `${i.name} | ${i.id}`));
//     } catch (e) {
//         console.error(e);

//     }
// })

// Get repo Id
// request({
//     url: 'https://github.ibm.com/api/v3/repos/IC2E-SPRINT/cirrus-billing-data-access',
//     method: 'get',  
//     json: true,
//     body: {
//         type: "private"
//     },
//     headers: {
//         'accept': 'applicaton/vnd.github.v3+json',    
//         'Content-Type': 'application/json',
//         'Authorization': 'token xxx',
//     }
// }, function (error, response, body) {
//     try {
//         console.log(response.statusCode);
//         console.log(body);
//     } catch (e) {
//         console.error(e);

//     }
// })

// Set teams permission for repo to Admin
// request({
//     url: 'https://github.ibm.com/api/v3/orgs/IBMAoT/teams/i-dev-testing-2023-02-13--13-02-83/repos/IBMAoT/i-DEV-TESTING-2023-02-13--13-02-83',
//     method: 'put',  
//     json: true,
//     body: {
//         permission: 'admin'
//     },
//     headers: {
//         'accept': 'applicaton/vnd.github.v3+json',    
//         'Content-Type': 'application/json',
//         'Authorization': 'token xxx',
//     }
// }, function (error, response, body) {
//     try {
//         console.log(response.statusCode);
//         const bodyJSON = JSON.parse(body);
//         console.log(response.statusCode);
//     } catch (e) {
//         console.error(e);

//     }
// })

// Create team , add members and add to repo
// request({
//     url: `https://github.ibm.com/api/v3/orgs/IBMAoT/teams`,
//     method: 'post',  
//     json: true,
//     body: {
//         org: 'IBMAoT',
//         name: "admin-i-rich-testing",
//         description: 'Admin for "DEV TESTING: Please ignore"',
//         repo_names: ['IBMAoT/i-rich-testing'],
//         'privacy': 'closed',
//         maintainers: ['rwilson']
//     },
//     headers: {
//         'accept': 'applicaton/vnd.github.v3+json',    
//         'Content-Type': 'application/json',
//         'Authorization': 'token xxx',
//     }
// }, function (error, response, body) {
//     try {
//         console.log(error);
//         console.log(response.statusCode);
//         const bodyJSON = JSON.parse(body);
//         console.log(response.statusCode);
//     } catch (e) {
//         console.error(e);

//     }
// })

// // Get Username
// request({
//     url: `https://github.ibm.com/api/v3/search/users?q=crmihai1@ie.ibm.com in:email`,
//     method: 'get',  
//     json: true,
//     body: {
//     },
//     headers: {
//         'accept': 'applicaton/vnd.github.v3+json',    
//         'Content-Type': 'application/json',
//         'Authorization': 'token xxx',
//     }
// }, function (error, response, body) {
//     try {
//         console.log(error);
//         console.log(response.statusCode);
//         console.log(body);
//     } catch (e) {
//         console.error(e);

//     }
// })

// Add member to team
// request({
//     url: `https://github.ibm.com/api/v3/orgs/IBMAoT/memberships/lisa-precht`,
//     method: 'put',  
//     json: true,
//     body: {
//         role: 'member',
//     },
//     headers: {
//         'accept': 'applicaton/vnd.github.v3+json',    
//         'Content-Type': 'application/json',
//         'Authorization': 'token xxx',
//     }
// }, function (error, response, body) {
//     try {
//         console.log(error);
//         console.log(response.statusCode);
//         console.log(body);
//     } catch (e) {
//         console.error(e);

//     }
// })

// Create repo
// request({
//     url: `https://github.ibm.com/api/v3/orgs/IBMAoT/repos`,
//     method: 'post',  
//     json: true,
//     body: {
//         org: 'IBMAoT',
//         name: "i-rich-testing",
//         description: 'DEV TESTING: Please ignore',
//         'private': true
//     },
//     headers: {
//         'accept': 'applicaton/vnd.github.v3+json',    
//         'Content-Type': 'application/json',
//         'Authorization': 'token xxx',
//     }
// }, function (error, response, body) {
//     try {
//         console.log(error);
//         console.log(response.statusCode);
//         console.log(body);
//     } catch (e) {
//         console.error(e);

//     }
// })

//const { items }
// Find login based on IBM email address
// request({
//         url: 'https://github.ibm.com/api/v3/user/repos?per_page=100',
//         method: 'get',  
//         headers: {
//             'accept': 'applicaton/vnd.github.v3+json',    
//             'Content-Type': 'application/json',
//             'Authorization': 'token xxx',
//         }
//     }, function (error, response, body) {
//         try {
//             const bodyJSON = JSON.parse(body);
//             const list = bodyJSON.map(i=> i.name)
//             console.log(list);
//         } catch (e) {
//             console.error(e);
    
//         }
//     })

//Get all issues in given Repo
//- Token is private token for ibmaot@us.ibm.com
// request({
//     url: 'https://github.ibm.com/api/v3/repos/IBMAoT/AoT-Showcases/issues',
//     method: 'get',  
//     headers: {
//         'accept': 'applicaton/vnd.github.v3+json',    
//         'Content-Type': 'application/json',
//         'Authorization': 'token xxx',
//     }
// }, function (error, response, body) {
//     try {
//         console.log(JSON.parse(body));
//     } catch (e) {
//         console.error(e);

//     }
// })

// Get a single issue
//  (async () => {
//       try {
//         const { statusCode, data: { labels }}  = await axios ({
//             url: 'https://github.ibm.com/api/v3/repos/IBMAoT/AoT-Asset-Review-Board/issues/670', 
//             method: 'get', 
//             responseType: 'json', 
//             headers: {
//                 'accept': 'applicaton/vnd.github.v3+json',    
//                 'Content-Type': 'application/json',
//                 'Authorization': `xxxx` 
//             }
//         })
//         console.log(JSON.stringify(labels))
//       } catch(e) {
//         console.log(e)
//       }
// })()

// Create a git issue
// (async () => {
//   try {
//     const { data : { url }}  = await axios ({
//         url: 'https://github.ibm.com/api/v3/repos/oic/asset-review-board-dev/issues', 
//         method: 'post', 
//         json: true,
//         data: {
//           "owner":"IBMOIC",
//           "title":"(202410) test 2",
//           "assignees":["rwilson"],
//           "projects": "Digital Properties",
//           "labels":["FA:AI","Init:Status:open","Init:NOT YET RATED"],
//           "body":"```\\n##### IMPORTANT #####:\\nThis section is automatically regenerated each time there is a key initiative change.\\nDo not edit and add additional comments, they will be lost.\\n```\\n_Last updated: Jun 17, 2024_\\n\\n### Current Initiatives Values:\\nInitiative: [test 2](http://localhost/Initiatives/66705d4c172e32294327322d) ( **High Impact** )\\n- Leaders:\\n   - Richard Wilson | rwilson@us.ibm.com\\n- Sponsor: Gisela Orozco Robles | gisela.orozco@ibm.com\\n- Expected Publication Date: 202410\\n- Start Date: May 29, 2024\\n- End Date: May 29, 2024\\n- Current Status: Open\\n- Focus Areas:\\n   -  **(Primary)**\\n   - - Git Repo URL: [undefined](undefined)\\n- EC Rating: \\n- ARB Reviewers:_Not assigned yet_\\n- Publication Folder: [https://ibm.box.com/s/g69zvcndq7p9k50ggqxjpp03txm45xn1](https://ibm.box.com/s/g69zvcndq7p9k50ggqxjpp03txm45xn1)\\n- Submitted Publication Files:\\n _Not available_\\n"
//         },
//         headers: {
//             'accept': 'applicaton/vnd.github.v3+json',    
//             'Content-Type': 'application/json',
//             'Authorization': `xxxx` 
//         }
//     })
//     console.log(JSON.stringify(url))
//   } catch(e) {
//     console.log(e)
//   }
// })()

//Creates an issue
// - Sends a notification email to assignees
// request({
//     url: 'https://github.ibm.com/api/v3/repos/IBMAoT/AoT-Showcases/issues',
//     method: 'post',  
//     json: true,
//     body: {
//         owner: "ibmaot",
//         title: "Testing Git API",
//         assignees: ["rwilson"],
//         body: "- [ ] Example\n - [ ] Example2",
//         labels: ["bug"]
//     },
//     headers: {
//         'accept': 'applicaton/vnd.github.v3+json',    
//         'Content-Type': 'application/json',
//         'Authorization': 'token xxx',
//     }
// }, function (error, response, body) {
//     try {
//         const {url, number} = body;   
//         console.log(url);
//     } catch (e) {
//         console.error(e);

//     }
// })

// // Get all Users
// request({
//     url: 'https://github.ibm.com/api/v3/users',
//     method: 'get',  
//     headers: {
//         'accept': 'applicaton/vnd.github.v3+json',
//         'Content-Type': 'application/json',
//         'Authorization': 'token xxx',
//     }
// }, function (error, response, body) {
//     try {
//         const data = JSON.parse(body);
//         console.log(data);
//     } catch (e) {
//         console.error(e);

//     }
// })

// // Get a user
// request({
//     url: 'https://github.ibm.com/api/v3/users/Andy-M-Ramos',
//     method: 'get',  
//     headers: {
//         'accept': 'applicaton/vnd.github.v3+json',    
//         'Content-Type': 'application/json',
//         'Authorization': 'token xxx',
//     }
// }, function (error, response, body) {
//     try {
//         const data = JSON.parse(body);
//         console.log(data.email);
//     } catch (e) {
//         console.error(e);

//     }
// })

//Creates an issue
// - Sends a notification email to assignees
// request({
//     url: 'https://github.ibm.com/api/v3/repos/IBMAoT/AoT-Showcases/issues',
//     method: 'post',  
//     json: true,
//     body: {
//         owner: "ibmaot",
//         title: "Testing Git API",
//         assignees: ["rwilson"],
//         body: "- [ ] Example\n - [ ] Example2",
//         labels: ["bug"]
//     },
//     headers: {
//         'accept': 'applicaton/vnd.github.v3+json',    
//         'Content-Type': 'application/json',
//         'Authorization': 'token xxx',
//     }
// }, function (error, response, body) {
//     try {
//         const {url, number} = body;   
//         console.log(url);
//     } catch (e) {
//         console.error(e);

//     }
// })

// //Update an issue
// // - Sends a notification email to assignees
// // Need to pull existing data first and then append, if necessary, for assignees and labels. Can also add the state string to set to Closed
// // NOTE: This will not update the comments. To add an additional comment, see below
// request({
//     url: 'https://github.ibm.com/api/v3/repos/IBMAoT/AoT-Showcases/issues/46',
//     method: 'patch',  
//     json: true,
//     body: {
//         owner: "ibmaot",
//         title: "Testing Git API",
//         assignees: ["ibmaot-us"],
//         body: "- [ ] Updated Example",
//         labels: ["deploy:dev"],
//         state: "closed"
//     },
//     headers: {
//         'accept': 'applicaton/vnd.github.v3+json',    
//         'Content-Type': 'application/json',
//         'Authorization': 'token xxx',
//     }
// }, function (error, response, body) {
//     try {
//         console.log(body);
//     } catch (e) {
//         console.error(e);

//     }
// })

//Add  an issue comment
// This will add a new comment to issue.  To change issue details then see above
// request({
//     url: 'https://github.ibm.com/api/v3/repos/IBMAoT/AoT-Showcases/issues/46/comments',
//     method: 'post',  
//     json: true,
//     body: {
//         body: "- [ ] Updated Example",
//         labels: ["deploy:dev"]
//     },
//     headers: {
//         'accept': 'applicaton/vnd.github.v3+json',    
//         'Content-Type': 'application/json',
//         'Authorization': 'token xxx',
//     }
// }, function (error, response, body) {
//     try {
//         console.log(body);
//     } catch (e) {
//         console.error(e);

//     }
// })


//Add a label
// request({
//     url: 'https://github.ibm.com/api/v3/repos/IBMAoT/AoT-Showcases/issues/46/labels',
//     method: 'post',
//     json: true,
//     body: {
//         labels: ["deploy:dev"]
//     },
//     headers: {
//         'accept': 'applicaton/vnd.github.v3+json',    
//         'Content-Type': 'application/json',
//         'Authorization': 'token xxx',
//     }
// }, function (error, response, body) {
//     try {
//         console.log(body);
//     } catch (e) {
//         console.error(e);

//     }
// })

//Delete a label
// request({
//     url: 'https://github.ibm.com/api/v3/repos/IBMAoT/AoT-Showcases/issues/46/labels/deploy:dev',
//     method: 'delete',
//     json: true,
//     headers: {
//         'accept': 'applicaton/vnd.github.v3+json',    
//         'Content-Type': 'application/json',
//         'Authorization': 'token xxx',
//     }
// }, function (error, response, body) {
//     try {
//         console.log(body);
//     } catch (e) {
//         console.error(e);

//     }
// })