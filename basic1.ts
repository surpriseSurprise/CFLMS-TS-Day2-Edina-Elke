// Create a class constructor named Person that should hold information about name, age,  jobTitle and have a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)”

class Person {
    firstName : string;
    age : number;
    jobTitle : string;

constructor(firstName: string, age: number, jobTitle:string) {
    this.firstName = firstName;
    this.age = age;
    this.jobTitle = jobTitle;
}

name() {
    return `Hello there, my name is ${this.firstName}, I am ${this.age} years old, and I am a ${this.jobTitle}.`
}
}

let myData = new Person("Elke", 46, "kitchen ghost");
console.log(myData.name());
document.getElementById("result").innerHTML = myData.name();
