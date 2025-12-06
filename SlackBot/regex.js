let x;
x = ':please-delete:Lots of :waving_white_flag:symbols :zany_face:';
x = '*Bold* _italic_ <https://www.gmail.com|link> ~strikethrough~\n`block`';
//x = '```Code```';
console.log(x.replace(/\:\S+\:/g,' ').replace(/\*(.*)\*/g,'$1').replace(/_(.*)_/g,'$1').replace(/~.*~/g,' ').replace(/\`{1,3}([^`]{1,})\`{1,3}/g,'$1').replace(/&gt;/g,'>').trim())