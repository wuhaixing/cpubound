function fibo (n) {
  return n > 1 ? fibo(n - 1) + fibo(n - 2) : 1;
}

function cb (err, data) {
  process.stdout.write(data);
  this.eval('fibo(35)', cb);
}

var thread= require('threads_a_gogo').create();


(function spinForever () {
  process.stdout.write(".");
  process.nextTick(spinForever);
})();

thread.eval(fibo).eval('fibo(35)', cb);