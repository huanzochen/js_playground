function foo(cb) {
  setTimeout(function() {
    try {
      var x = baz.bar()
      cb(null, x) // 成功
    }
    catch (err) {
      cb(err)
    }
  }, 100)
}

foo(function(err, val) {
  if (err) {
    console.error(err)
  }
  else {
    console.log(val)
  }
})