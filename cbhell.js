var start = process.hrtime();

var elapsed_time = function(note){
    var precision = 3; // 3 decimal places
    var elapsed = process.hrtime(start)[1] / 1000000; // divide by a million to get nano to milli
    console.log(process.hrtime(start)[0] + " s, " + elapsed.toFixed(precision) + " ms - " + note); // print message + time
    start = process.hrtime(); // reset the timer
};

setTimeout(function() {
  elapsed_time("1");
  setTimeout(function() {
    elapsed_time("2");
    setTimeout(function() {
      elapsed_time("3");
    }, 100);
  }, 500);
}, 1000);