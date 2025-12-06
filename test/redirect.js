(async () => {
    try {
    const { headers } = await fetch("https://video.ibm.com/channel/23631906/video/cus2b4", {
        method: 'GET',
        redirect: 'manual' // Prevent automatic redirects
    });
    console.log(headers.get('location'))
}
catch(e) {
    console.log(`${e?.response?.status ?? e} - ${e?.response?.statusText}`)
}
})();