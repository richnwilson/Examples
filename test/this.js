const func = (test) => {
    console.log(`This is a ${test}`)
    console.log(this.name)
}

func("test")