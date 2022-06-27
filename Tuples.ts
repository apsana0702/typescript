let Tuple: [number,boolean, string];

// initialize correctly
Tuple = [53,false,"Codehelp"];
console.log (Tuple);
// change order
Tuple=[true," well come",4];
console.log (Tuple);
// passing other argument
Tuple=[true," well come",4,55];
console.log (Tuple);
//readonly

let Tuples:readonly[boolean, string,number]=[true," well come",4];
console.log (Tuples);
Tuples.push(false);
console.log ( Tuples);
