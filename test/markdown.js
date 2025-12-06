(async () => {
    try {
        const md = require('markdown-it')();
        const { readFile } = require('fs/promises')
        let text = await readFile('./markdown.md','utf8');
        text=text.replace(/[^!]\[(.*?)\]\((\.\/|\/)(.*?)\)/g,"[$1](https://www.gmail.com/$3)")
        text=text.replace(/!\[(.*?)\]\((\.\/|\/)(.*?)\)/g, "![$1](https://www.gmail.com/$3?raw=true)")
        const x = md.render(text);
        console.log(x)
    } catch(e) {
        console.log(e)
    }
})();