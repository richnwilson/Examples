const localtunnel = require("localtunnel");

(async () => {
    try {
        const tunnel = await localtunnel({port: 6000})
        console.log (`Assigned public URL for your tunnel to be copied and pasted in the 'IBM InnerSource - Test' app: ${tunnel.url}`)
        tunnel.on('close', () => {  })
    } catch (e) {
        console.log(`ERROR: Starting localtunnel`)
    }
})();