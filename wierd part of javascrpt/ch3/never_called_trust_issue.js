var axios = require('axios')

function timeoutify(fn, delay) {
    var intv = setTimeout(function() {
        intv = null
        fn(new Error('Timeout!'))
    }, delay)
	

    return function() {
    // timeout hasn't happened yet?
        if (intv) {
            clearTimeout(intv)
            fn.apply(this, [null].concat([].slice.call(arguments)))
        }
    }
}

// using "error-first style" callback design
function foo(err, data) {
    if (err) {
        console.error(err)
    }
    else {
        console.log(data)
    }
}

axios('http://www.google.com', timeoutify(foo, 500))