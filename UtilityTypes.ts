// Partial
//changes the properties of an object to be optional 


 interface word {
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
//changes properties of an object that are required 



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
//defines an object with specific key type or value type



const ne: Record<string, number> = {
  'gita': 21,
  'chandini': 25
};

console.log(ne);

//this demonstrates usage of Partial, Requires,Record
//------------------------
//pick
//removes all except th specified  from an obj type 



interface Person {
  name: string;
  age: number;
  location?: string;
}

const bob: Pick<Person, 'name'> = {
  name: 'lakshmi'
};
Console.log (lakshmi);

//omit example
//removes keys from object type




interface Person {
  name: string;
  age: number;
Gender:string;
  location?: string;
}
const bob: Omit<Person, 'age' | 'Gender' | 'location'> = {
  name: 'saisri'
};
Console.log (saisri);

//Exclude
//removes types from the union

type Primitive = string | number | boolean
const value: Exclude<Primitive, string> = true; 
Console.log (typeof value);
// working of Exclude type

