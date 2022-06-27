var arr:number[]=[];
arr.push(3);
arr.push(10);
console.log (arr);
// readonly ex
var a:readonly string[]=[];
a.push("Ball");
console.log (a);
// infer 
var b:number []=[];
b.push(6);
console.log (b);
b.push("Hello ");
console.log (b);
