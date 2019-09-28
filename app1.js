var Person = {
    firstName: '',
    lastName: '',
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}

var Person1 = function() {
    this.firstName = '';
    this.lastName = '';
    this.getFullName = function() {
        return this.firstName + ' ' + this.lastName;
    };
}

let hoa = Object.create(Person);
hoa.firstName = 'Ngọc';
hoa.lastName = 'Hoa';

let phuong = Object.create(Person);
phuong.firstName = 'Linh';
phuong.lastName = 'Phuong';

let mai = new Person1();
mai.firstName = 'Ngoc';
mai.lastName = 'Mai';

console.log(hoa.getFullName());
console.log(phuong.getFullName());
console.log(mai.getFullName());