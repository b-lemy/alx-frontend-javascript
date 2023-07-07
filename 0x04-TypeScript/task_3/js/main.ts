interface Teacher {
    // firstName(string) and lastName(string).
    // These two attributes should only be modifiable when a Teacher is first initialized
    readonly firstName: string;
    readonly lastName: string;

    //fullTimeEmployee(boolean) this attribute should always be defined
    fullTimeEmployee: boolean;
   // location(string) this attribute should always be defined
    location: string;

    //yearsOfExperience(number) this attribute is optional
    yearsOfExperience?: number;

    // Add the possibility to add any attribute to the
    // Object like contract(boolean) without specifying the name of the attribute
    [key: string]: any
}
const teacher1: Teacher = {
    firstName: 'Frank',
    lastName: 'Donald',
    fullTimeEmployee: true,
    location: 'New Jersey',
    contract: false,
}
console.log(teacher1);

interface Directors extends Teacher {
    numberOfReports: number;
}
//Write an interface named Directors that extends Teacher. It requires an attribute named numberOfReports(number)
const director1: Directors = {
    firstName: 'John',
    lastName: 'Smith',
    location: 'America',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

// Write a function printTeacher:
//It accepts two arguments firstName and lastName
// It returns the first letter of the firstName and the full lastName
// Example: printTeacher("John", "Doe") -> J. Doe
// Write an interface for the function named printTeacherFunction.

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => `${firstName[0]}. ${lastName}`;

console.log(printTeacher('john', 'doe'));

// Write a Class named StudentClass:
//The constructor accepts firstName(string) and lastName(string) arguments
// The class has a method named workOnHomework that return the string Currently working
// The class has a method named displayName. It returns the firstName of the student
// The constructor of the class should be described through an Interface
// The class should be described through an Interface
interface StudentClassInterface {
    firstName: string;
    lastName: string;
}

interface StudentClassConstructorInterface {
    new(firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

function createStudent(cStudent: StudentClassConstructorInterface, firstName: string, lastName: string): StudentClassInterface {
    return new cStudent(firstName, lastName);
}

const student1 = createStudent(StudentClass, 'mike', 'tyson');
console.log(student1);