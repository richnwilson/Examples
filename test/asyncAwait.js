getCount([1,2,3,4,5,6,7,8,9,10]).then(results => {
    console.log(results);
})

async function getCount(counts) {
    let fileChanges = {
        "even" : [],
        "odd" : []
    };
    try {
        for (let i=0; i<counts.length; i++){
            if (counts[i] % 2 ===  0) {
                    fileChanges.even.push(counts[i]);
                    Array.prototype.push.apply(fileChanges,await getCount([11]));              
            }
            fileChanges.odd.push(counts[i]);
        }
        return fileChanges;
    }
    catch(e) {
        console.log(e);
    }
}       
