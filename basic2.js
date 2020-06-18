var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”
var Person = /** @class */ (function () {
    function Person(firstName, age, jobTitle) {
        this.firstName = firstName;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    return Person;
}());
var extPerson = /** @class */ (function (_super) {
    __extends(extPerson, _super);
    function extPerson(firstName, age, jobTitle, salary, location) {
        var _this = _super.call(this, firstName, age, jobTitle) || this;
        _this.salary = salary;
        _this.location = location;
        return _this;
    }
    extPerson.prototype.nameExt = function () {
        return "Hello there, my name is " + this.firstName + ", I am " + this.age + " years old, and I am a " + this.jobTitle + ". I get " + this.salary + " \u20AC salary every month, and I work in " + this.location + "\u201D";
    };
    return extPerson;
}(Person));
var extData = new extPerson("Elke", 46, "kitchen ghost", 5000, "Vienna");
console.log(extData.nameExt());
document.getElementById("result").innerHTML = extData.nameExt();
