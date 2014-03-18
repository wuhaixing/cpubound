//6+4+2+1+3=16
//6+4+2+1-3=10
//6+4+2-1=11
//6+4-2=8
//6-4=2


var res = new Int16Array([16,10,11,8,2]),l= res.length;
var variables = [];
var thread= require('threads_a_gogo').create();
var flow = require('nimble');


(function calculate(i) {
	if(i === l-1) {
	    variables[i] = res[i];
	    console.log(i + ":" + variables[i]); 
	    process.exit();
	}else {
		flow.series([
  			function (callback) {
				calculateTail(res[i],res[i+1],function(tail) {
					variables[i] = tail;
					console.log(i + ":(" + res[i] + "-" + res[i+1] + ")/2=" + variables[i]); 
					callback();
				});
			},
			function (callback) {
				calculateHead(res[i],res[i+1],function(head) {
					res[i+1] = head;
					console.log('-----------------'+i+'-----------------')
					callback();
				});
			},
			function(callback){
				calculate(i+1);
			}]);
	}
})(0);

function calculateTail(x,y,cb) {
	console.log("calculate tail:("+ x + "," + y + ")");
	thread.eval(fibo).eval('fibo(30)',function(err,data){
		var tail = (x-y)/2;
		console.log("tail is " + tail);
		cb(tail);
    });
}
function calculateHead(x,y,cb) {
	console.log("calculate head:("+ x + "," + y + ")");
    thread.eval(fibo).eval('fibo(40)',function(err,data){
		var head = (x+y)/2;
		console.log("head:" + head);
		cb(head);
    });

}
function fibo (n) {
  return n > 1 ? fibo(n - 1) + fibo(n - 2) : 1;
}



