const sequence = new Promise((res) => {
    let count = 0;
    setInterval(() => {
        res(count++)
    })
})

sequence.then((v)=>console.log(v))