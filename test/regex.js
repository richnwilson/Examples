let x = "https://pages.github.ibm.com/IBMAoT/AoT-Asset-Review-Board/report.html?id=12db68bd0bcc1f73c4f783ec481d0e22";
x="https://aot.atl.dst.ibm.com/aot/aotrpts.nsf/691ab48aff066fc085257ef4005d4274/9301337e3b3093a585257fd200553aec?OpenDocument";

let name = x.replace(/^.*?id=(.*)$/,'https://pages.github.ibm.com/IBMAoT/AoT-Published-Assets/report.html?id=$1');
console.log(name);

let contributors = "a, b,  c,  d,e";
console.log(contributors.replace(/[ ]{1,},[ ]{1,}/,","))
