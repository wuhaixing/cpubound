function fibo (n) {
  return n > 1 ? fibo(n - 1) + fibo(n - 2) : 1;
}


var cluster= require('cluster');

if (cluster.isMaster) {
    cluster.fork();
} else {
    (function fiboLoop () {
	    process.stdout.write(fibo(40).toString());
	    process.nextTick(fiboLoop);
	})();
}

(function spinForever () {
  process.stdout.write(".");
  process.nextTick(spinForever);
})();