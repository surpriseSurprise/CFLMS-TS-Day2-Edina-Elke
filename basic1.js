// Create a class constructor named Person that should hold information about name, age,  jobTitle and have a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)”
var Person = /** @class */ (function () {
    function Person(firstName, age, jobTitle) {
        this.firstName = firstName;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.name = function () {
        return "Hello there, my name is " + this.firstName + ", I am " + this.age + " years old, and I am a " + this.jobTitle + ".";
    };
    return Person;
}());
var myData = new Person("Elke", 46, "kitchen ghost");
console.log(myData.name());
document.getElementById("result").innerHTML = myData.name();
