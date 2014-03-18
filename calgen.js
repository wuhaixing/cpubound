//6+4+2+1-3=16
//6+4+2+1-3=10
//6+4+2-1=11
//6+4-2=8
//6-4=2
var res = new Int16Array([16,10,11,8,2]),l= res.length;
var variables = [];
var Q = require('q');

var qTail = Q.denodeify(calculateTail);
var qHead = Q.denodeify(calculateHead);

(function calculate(i) {
	Q.spawn(function* () {
		i = yield Q
			.all([qTail(res[i],res[i+1]),qHead(res[i],res[i+1])])
			.spread(function(tail,head){
				variables[i] = tail;
				res[i+1] = head;
				return i+1;
			})
        console.log('-----------------'+i+'-----------------')
		if(i === l-1) {
		    variables[i] = res[i];
		    console.log(i + ":" + variables[i]); 
		    process.exit();
		}else {
		  calculate(i);
		}			
	});
})(0);

function calculateTail(x,y,cb) {
	console.log("calculate tail:("+ x + "," + y + ")");
	setTimeout(function(){
		var tail = (x-y)/2;
		console.log("tail:" + tail);
		cb(null,tail);
    },300);
}
function calculateHead(x,y,cb) {
	console.log("calculate head:("+ x + "," + y + ")");
    setTimeout(function(){
		var head = (x+y)/2;
		console.log("head:" + head);
		cb(null,head);
    },400);
}
