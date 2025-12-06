try {
    const isDefined = {a: "yes"}
    console.log(`Is defined, all okay and I can show response ${isDefined.a}`)
    console.log(`Is not defined, but catching for that ${isDefined.b?.c}`)    
    console.log(`Is not defined and not allowing for undefined, then error ${isDefined.b.c}`)

}  catch(e) {
    console.log(e)
}


