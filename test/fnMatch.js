const { minimatch } = require('minimatch');

console.log(minimatch('qa/foo/bar/foobar/hello-world', 'qa/**/*'))