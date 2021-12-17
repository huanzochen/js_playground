// const { join } = require('path')

const toSlug = input => encodeURIComponent(
    join('-')(
        map(toLowerCase)(
            split(' ')(
                input
            )
        )
    )
)
  
console.log(toSlug(['JS Cheerleader'])) // 'js-cheerleader'