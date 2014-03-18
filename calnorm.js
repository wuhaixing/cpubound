//6+4+2+1+3=16
//6+4+2+1-3=10
//6+4+2-1=11
//6+4-2=8
//6-4=2
var res = new Int16Array([16,10,11,8,2]),l= res.length;
var variables = [];
for(var i = 0;i < l;i++) {
    if(i === l-1) {
        variables[i] = res[i];
        console.log(i + ":" + variables[i]); 
    }else {
		variables[i] = calculateTail(res[i],res[i+1]);
		console.log(i + ":(" + res[i] + "-" + res[i+1] + ")/2=" + variables[i]);  
		res[i+1] = calculateHead(res[i],res[i+1]);
    }
    
}

function calculateTail(x,y) {
	console.log("calculate tail of ("+ x + "," + y + ")");
	var tail = (x-y)/2;
	console.log("tail is " + tail);
	return tail;
}
function calculateHead(x,y) {
    console.log("calculate head of ("+ x + "," + y + ")");
	var head = (x+y)/2;
	console.log("head is " + head);
	return head;
}
