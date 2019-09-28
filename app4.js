class Person{
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        console.log(`Hello toi la ${this.firstName} ${this.lastName}`);
    }
}


let hoa = new Person('Ngoc', 'Hoa');

let hien = new Person('Minh', 'Hien');

hoa.sayHello();
hien.sayHello();
console.log(hoa.__proto__);
console.log(hoa.__proto__ === hien.__proto__);