import request from 'request';
// // get sha of file
// request({
//     url: 'https://github.ibm.com/api/v3/repos/IBMAoT/AoT-Asset-Review-Board-DEV/contents/sitemap.xml?ref=gh-pages',
//     method: 'get',  
//     headers: {
//         'accept': 'applicaton/vnd.github.v3+json',    
//         'Content-Type': 'application/json',
//         'Authorization': 'token xxx'
//     }
// }, function (error, response, body) {
//     try {
//         console.log(JSON.parse(body));
//     } catch (e) {
//         console.error(e);

//     }
// })

//Get all issues in given Repo
//- Token is private token for ibmaot@us.ibm.com
// request({
//     url: 'https://github.ibm.com/api/v3/repos/IBMAoT/i-sno-cloud-paks',
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


// Update file

// let data = 'stackabuse.com';
// let bufferObj = Buffer.from(data, "utf8");
// let base64String = bufferObj.toString("base64");

// request({
//     url: 'https://github.ibm.com/api/v3/repos/IBMAoT/AoT-Asset-Review-Board-DEV/contents/sitemap.xml',
//     method: 'put',  
//     headers: {
//         'accept': 'applicaton/vnd.github.v3+json',    
//         'Content-Type': 'application/json',
//         'Authorization': 'token xxx',
//     },
//     json: true,
//     body: {
//         branch: "gh-pages",
//         message: "Update sitemap.xml",
//         content: base64String,
//         sha: 'e7e72586c70f3bf0718a2b6af811c8c4cb4df179'
//     }
// }, function (error, response, body) {
//     try {
//         console.log(body);
//     } catch (e) {
//         console.error(e);

//     }
// })

// // Find login based on IBM email address
// request({
//         url: 'https://github.ibm.com/api/v3/repos/IBMAoT/AoT-Asset-Review-Board-DEV/git/trees/gh-pages?recursive=1',
//         method: 'get',  
//         headers: {
//             'accept': 'applicaton/vnd.github.v3+json',    
//             'Content-Type': 'application/json',
//             'Authorization': 'token xxx',
//         }
//     }, function (error, response, body) {
//         try {
//             console.log(JSON.parse(body));
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

// // Get a single issue
// request({
//     url: 'https://github.ibm.com/api/v3/repos/IBMAoT/AoT-Showcases/issues/39',
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

// // Get usser
// request({
//     url: 'https://github.ibm.com/api/v3/orgs/oic/members/rwilson',
//     method: 'get',  
//     headers: {
//         'accept': 'applicaton/vnd.github.v3+json',    
//         'Content-Type': 'application/json',
//         'Authorization': 'token xxx',
//     }
// }, function (error, response, body) {
//     try {
//         let data = body
//         try {
//             data = JSON.parse(body)
//         } catch(e) {

//         }
//         console.log(data);
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

// Get Teams
request({
    url: 'https://github.ibm.com/api/v3/orgs/oic/teams',
    method: 'get',  
    headers: {
        'accept': 'applicaton/vnd.github.v3+json',    
        'Content-Type': 'application/json',
        'Authorization': 'token xxx',
    }
}, function (error, response, body) {
    try {
        let data = body
        try {
            data = JSON.parse(body)
        } catch(e) {

        }
        console.log(data);
    } catch (e) {
        console.error(e);
    }
})