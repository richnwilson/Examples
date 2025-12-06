const updated = {Asia: ["d","e"], Europe: ["a","b","c"]}
const old = {Europe: ["a","b","c"], Asia: ["e","d","f"]}

let isSame = true;
for (const [regions, users] of Object.entries(updated)) {
    if (!old[regions]) {
        isSame = false;
        break;
    }
    if (JSON.stringify(users.sort()) !== JSON.stringify(old[regions].sort())) {
        isSame = false;
        break;
    }
}

console.log(isSame);