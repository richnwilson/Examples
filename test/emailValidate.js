const x = "a@gmail.com, b@gmail.com";
const y = x.replace(' ','').trim().split(',');
for (const email of y) {
    if (!/^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$/.test(email)) {
        
    }
}