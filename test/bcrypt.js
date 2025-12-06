const bcrypt = require('bcrypt');

(async () => {
    try {
        const password = await bcrypt.hash("1234", 10);
        console.log(password)
        console.log(bcrypt.compareSync("1234","$2b$10$oEjtttiCTiNxyY4CCWNokuPMb0zS57KqU0P5.hyAGW2aTVrsoo9hu"))
    } catch(e) {
        console.log(e)
    }
})();

