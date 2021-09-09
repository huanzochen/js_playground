function delay() { 
    let i
    for (i = 0; i <= 5 ; i++) {
        let k = i
        setTimeout(function() { 
            console.log(k)
        }, 1000)
    } 
}

delay() // 0 1 2 3 4 5