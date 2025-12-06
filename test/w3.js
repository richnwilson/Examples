/*
 MIT License

Copyright (c) 2019, 2021 - IBM Corp.

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 The above copyright notice and this permission notice shall be included in all copies or substantial
 portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
 NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
import pkg from 'ibm-verify-sdk';
const {OAuthContext} = pkg;
import rls from 'readline-sync';

const config = {
    tenantUrl: 'https://login.w3.ibm.com',
    clientId: 'NTE5ODgyYTUtNTMyNy00',
    redirectUri: 'https://localhost:3000/api/auth',
    clientSecret: 'YTA4YmIyNDctNDJiZS00',
    responseType: 'code',
    flowType     : 'ropc',
    scope        : 'open-id'
};

async function login() {
    try {
        return await ROPC.login(username, password);
    } catch (error) {
        throw error;
    }
}


console.log('ibm-verify-sdk ROPC sample application\n\n');

console.log('Authenticate against');
console.log(`tenant    : ${config.tenantUrl}`);
console.log(`client ID : ${config.clientId}\n\n`);

const ROPC = new OAuthContext(config);

const username = rls.question('username: ');
const password = rls.question('password: ', { hideEchoBack: true });

let token;

console.log('\n\nAuthenticating...');
login().then(t => {
    token = t;

    console.log('Successfully authenticated\n\n');
    console.log('Retrieving user information...');
    ROPC.userInfo(token).then(r => {
        console.log('Successfully retrieved user information\n\n');
        console.log(r.response);
    }).catch(e => {
        console.log('Error occured while retrieving user information');
        console.log(e);
    });
}).catch(e => {
    console.log('Error occured while authenticating', e.message);
});
