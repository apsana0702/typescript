// Partial interface word {
  x: number;
  y: any;
}
            
let pointPart: Partial<word> = {};
pointPart.x = 10;
 
Console.log ("partial example");
let me:Partial<word> = {
};

me.y="demo example";
console.log(pointPart);
Console.log (me);

//Requires example

interface Car {
  make: string;
  model: string;
  mileage?: number;
}
let myCar: Required<Car> = {
  make: 'Ford',
  model: 'Focus',
  mileage: 12000
};
Console.log(mycar);

//Record example
const ne: Record<string, number> = {
  'gita': 21,
  'chandini': 25
};

console.log(ne);

//this demonstrates usage of Partial, Requires,Record
