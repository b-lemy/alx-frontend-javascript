// Create a class Director that will implement DirectorInterface
//workFromHome should return the string Working from home
// getToWork should return the string Getting a coffee break
// workDirectorTasks should return the string Getting to director tasks
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
// Create a class Teacher that will implement TeacherInterface
//workFromHome should return the string Cannot work from home
// getCoffeeBreak should return the string Cannot have a break
// workTeacherTasks should return the string Getting to work
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
// Create a function createEmployee with the following requirements:
// It can return either a Director or a Teacher instance
// It accepts 1 argument:
//   salary(either number or string)
// if salary is a number and less than 500 - It should return a new Teacher. Otherwise,
// it should return a Director
function createEmployee(salary) {
    return typeof salary === 'number' && salary < 500 ? new Teacher() : new Director();
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
// Write a function isDirector:
//
//     it accepts employee as an argument
// it will be used as a type predicate and if the employee is a director
// Write a function executeWork:
//
//     it accepts employee as an argument
// if the employee is a Director, it will call workDirectorTasks
// if the employee is a Teacher, it will call workTeacherTasks
var isDirector = function (employee) { return employee instanceof Director; };
var executeWork = function (employee) {
    var res;
    isDirector(employee) ? res = employee.workDirectorTasks() : res = employee.workTeacherTasks();
    return res;
};
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
var teachClass = function (todayClass) { return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History'; };
console.log(teachClass('Math'));
console.log(teachClass('History'));
