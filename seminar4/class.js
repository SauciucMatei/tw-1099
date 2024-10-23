const Student = class {
    constructor(name,age,grade){
        this.name=name;
        this.age=age;
        this.grade=grade;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Teacher extends Student {
    constructor(name,age,grade,subject){
        super(name,age,grade); // super intai pentru a instantia clasa mare
        this.subject = subject;
    }
    teach() {
        console.log(`I teach ${this.subject}`);
    }
}

const student = new Student('Matei', 25, 19);
const teacher = new Teacher('Gilbert',25,19,'Tehnologii Web');

console.log(student);
console.log(teacher);