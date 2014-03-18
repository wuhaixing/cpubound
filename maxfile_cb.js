var fs = require('fs')
var path = require('path')
 
module.exports = function (dir, cb) {
  fs.readdir(dir, function (er, files) { // [1]
    if (er) return cb(er)
    var counter = files.length
    var errored = false
    var stats = []
 
    files.forEach(function (file, index) {
      fs.stat(path.join(dir,file), function (er, stat) { // [2]
        if (errored) return
        if (er) {
          errored = true
          return cb(er)
        }
        stats[index] = stat // [3]
 
        if (--counter == 0) { // [4]
          var largest = stats
            .filter(function (stat) { return stat.isFile() }) // [5]
            .reduce(function (prev, next) { // [6]
              if (prev.size > next.size) return prev
              return next
            })
          cb(null, files[stats.indexOf(largest)]) // [7]
        }
      })
    })
  })
}