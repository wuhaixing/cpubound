//6+4+2+1+3=16
//6+4+2+1-3=10
//6+4+2-1=11
//6+4-2=8
//6-4=2


var res = new Int16Array([16,10,11,8,2]),l= res.length;
var variables = [];
var i=0;

for(var i = 0;i < l;i++) {
	if(i === l-1) {
	    variables[i] = res[i];
	    console.log(i + ":" + variables[i]); 
	    process.exit();
	}else {
		calculateTail(res[i],res[i+1],function(tail) {
			variables[i] = tail;
			console.log(i + ":(" + res[i] + "-" + res[i+1] + ")/2=" + variables[i]); 
			calculateHead(res[i],res[i+1],function(head) {
				res[i+1] = head;
				console.log('-----------------'+i+'-----------------')
			});
		});
	}
}

function calculateTail(x,y,cb) {
	console.log("calculate tail:("+ x + "," + y + ")");
	setTimeout(function(){
		var tail = (x-y)/2;
		console.log("tail:" + tail);
		cb(tail);
    },300);
}
function calculateHead(x,y,cb) {
	console.log("calculate head:("+ x + "," + y + ")");
    setTimeout(function(){
		var head = (x+y)/2;
		console.log("head:" + head);
		cb(head);
    },400);
}



