const x = "https://ibm.com/IBMAoT/AoT-Published-Assets/"
let test=false;
if (x !== null ? x.search(/^.*pages\.github*/) === -1 : true) {
    test=true
}
console.log(test)