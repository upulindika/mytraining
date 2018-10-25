let hw: string = "Hello, world";
let nameq: string = " student";
console.log(hw, nameq);
let arr: number[]=[];
arr.push(1);
enum Color {Red = 5, Blue, Green};
let c: Color = Color.Blue;
console.log(c);
console.log(typeof c);

class Customer {
    private name: string = "aaaaaaaa";

   public get namew(): string {
        return this.name
    }
}
let ccc = new Customer();
let nnn = ccc.namew;
console.log(nnn);
