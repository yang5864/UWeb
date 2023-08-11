const sing = async () => {
    throw ("OH NO, PROBLEM!")
    return 'LA LA LA LA'
}

sing()
    .then(data => {
        console.log("PROMISE RESOLVED WITH:", data1)
    })
    .catch(err=> {
        console.log("OH NO, PROMISE REJECTED!")
        console.log(err)
    })