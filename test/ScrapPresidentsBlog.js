const request = require("request");

request('https://ibm.biz/aotBlogPresident', function (error, response, body) {
  if (!error) {
    console.log(body);
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});