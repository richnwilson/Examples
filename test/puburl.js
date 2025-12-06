const x = "[https://www.gmail.com](https://www.gmail.com)"
console.log(x.replace(/^\[(.*)\]\((.*)\)$/,"$1"))