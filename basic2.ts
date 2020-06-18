// Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”
class Person {
    firstName : string;
    age : number;
    jobTitle : string;

constructor(firstName: string, age: number, jobTitle:string) {
    this.firstName = firstName;
    this.age = age;
    this.jobTitle = jobTitle;
}

class extPerson extends Person {
    salary : number;
    location: string;
    constructor(firstName: string, age: number, jobTitle: string, salary: number, location: string) {
    super(firstName, age, jobTitle);
    this.salary = salary;
    this.location = location;
}

nameExt() {
    return `Hello there, my name is ${this.firstName}, I am ${this.age} years old, and I am a ${this.jobTitle}. I get ${this.salary} € salary every month, and I work in ${this.location}”`
}
}

let extData = new extPerson("Elke", 46, "kitchen ghost", 5000, "Vienna");
console.log(extData.nameExt());
document.getElementById("result").innerHTML = extData.nameExt();
