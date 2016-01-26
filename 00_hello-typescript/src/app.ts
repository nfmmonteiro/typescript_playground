function doIt(object:{name: string}) {
    console.log(object.name);
}

doIt({name: 'Nuno'});

var x:number = 2;
var y:string = 'Nuno';
var xy:any = (x + y);

console.log(xy, typeof xy);


module TypescriptDemo {

    export interface IAnimal {
        name:string;
        sayName():void;
    }

    export class Animal implements IAnimal {
        private _name:string;

        get name():string {
            return this._name;
        }

        set name(name:string) {
            this._name = name;
        }

        constructor(name:string) {
            this._name = name;
        }

        sayName() {
            console.log(`My name is ${this._name}`);
        }
    }


    export class Dog extends Animal {
        bark():void {
            console.log(`[${this.name}] wow wow!`);
        }
    }
}

var myAnimal:TypescriptDemo.IAnimal = new TypescriptDemo.Dog('Dogie Ollie');
myAnimal.sayName();

console.log(`myDog instanceof Dog: ${myAnimal instanceof TypescriptDemo.Dog},myAnimal instanceof Animal: ${myAnimal instanceof TypescriptDemo.Animal}`);

// Casting an in Typescript <Type>
if (myAnimal instanceof TypescriptDemo.Dog) {
    (<TypescriptDemo.Dog>myAnimal).bark();
}

enum Role { Amin = 1, Normal = 2};

console.log('Role: ', typeof Role);

class Person {

    constructor(public name: string) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello ${this.name}`);
    }

    sayHi(hi: {date: Date, message:string}) {
        console.log(`Hi ${hi.message}. Date: ${hi.date}!`);
    }
}

var person:Person = new Person('Nuno Monteiro');
person.sayHello();

person.sayHi({date: new Date(), message: 'Nuno Monteiro'});

// hack typescript compiler to create enum with values as strings
enum Brand {
    BMW = 'BMW' as any,
    AUDI = 'AUDI' as any,
    MERCEDES = 'MERCEDES' as any
}

interface Car {
    brand: Brand;
    model: string;
}

function showCar(car: Car) {
    console.log(`My card is a ${car.brand}, model ${car.model}`);
}

showCar({brand: Brand.AUDI, model: 'A3'});
var brand: Brand = Brand['BMW'];
console.log(`brand: ${brand}`);


class Student {

    // constructor with private and public fields
    // as a shorthand that allows us to automatically create properties
    constructor(public name:string, private year:number) {
    }

    toString() {
        console.log(`Student{ name: ${this.name}, age: ${this.year}}`);
    }
}

var student:Student = new Student('Nuno Monteiro', 2012);
student.toString();
console.log(student.name);

interface IPerson {
    name: string;
}

function greeter(person:IPerson) {
    console.log(`hello ${person.name}`)
}

greeter({name: 'Nuno Monteiro'});
greeter(student);





