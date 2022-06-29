
class week {
private name: string;
public n: number=4;
public n1n: number;
public typ:string;
public constructor(name: string) {
   this.name= name;
}

public child(n): number{
    return this.n;
}

public key(): number {
    return this.n1n;
}
public word():string {
    return this.typ;
}

public getName(): string {
return this.name;
}
}
const num =new week(34);
console.log (num.key());
const person =new week("sunday");
console.log(person.getName());
const m = new week("Hello ");
console.log (m.word());
console.log (person.child());
