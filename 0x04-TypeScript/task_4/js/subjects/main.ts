// Create a file Teacher.ts and write a Teacher interface in a namespace named Subjects.
//
//     the interface requires firstName and lastName as string
// Create a file Subject.ts and write a Subject class in the same namespace named Subjects.
//
//     the class has one attribute teacher that implements the Teacher interface
// the class has one setter method setTeacher that accepts a teacher in argument (and as setter, set the instance attribute teacher with it)
//     Create a file Cpp.ts and make the following modifications in the same namespace.
//
//     Using declaration merging, add a new optional attribute experienceTeachingC (number) to the Teacher interface
// Create a class Cpp extending from Subject
// Write a method named getRequirements that will return a string Here is the list of requirements for Cpp
//     Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
// If the teacher doesn’t have any experience in teaching C, then the method should return a string No available teacher
// Create a file React.ts and write a React Class in the same namespace.
//
//     Add a new attribute experienceTeachingReact? (number) to the Teacher interface
// In the class, write a method named getRequirements that will return a string Here is the list of requirements for React
//     Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
// If the teacher doesn’t have any experience in teaching React, then the method should return a string No available teacher
// Create a file Java.ts and write a Java Class in the same namespace.
//
//     Add a new attribute experienceTeachingJava? (number) to the Teacher interface
// In the class, write a method named getRequirements that will return a string Here is the list of requirements for Java
//     Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
// If the teacher doesn’t have any experience in teaching Java, then the method should return a string No available teacher

/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />
/// <reference path="Cpp.ts" />
/// <reference path="React.ts" />
/// <reference path="Java.ts" />

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();
export const cTeacher: Subjects.Teacher = {
    firstName: "Bobby",
    lastName: "Wine",
    experienceTeachingC: 10,
};

console.log("C++");
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("Java");
java.setTeacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log("React");
react.setTeacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());