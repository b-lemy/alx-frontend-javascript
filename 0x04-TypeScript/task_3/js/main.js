"use strict";
// Create a directory called task_3 and copy these configuration files into it: package.json, webpack.config.js, tsconfig.json.
//
//     The first part of will require that you build an interface and a type.
//     Inside a file named interface.ts:
//
//     Create a type RowID and set it equal to number
// Create an interface RowElement that contains these 3 fields:
//     firstName: string
// lastName: string
// age?: number
// You are building the next part of the application architecture.
// The goal is to save the entities to a database. Because of time constraints,
// you can’t write a connector to the database, and you decided to download a library called crud.js.
// Copy this file into the task_3/js directory.
//
//     Here it is
//
// Write an ambient file within task_3/js, named crud.d.ts containing the type declarations for each crud function. At the top of the file import RowID and RowElement from interface.ts.
//
//     In main.ts
//
// At the top of the file create a triple slash directive that includes all the dependencies from crud.d.ts
// Import the rowID type and rowElement from interface.ts
// Import everything from crud.js as CRUD
// Create an object called row with the type RowElement with the fields set to these values:
//
//     firstName: Guillaume
// lastName: Salva
// Create a const variable named newRowID with the type RowID and assign the value the insertRow command.
//
//     Next, create a const variable named updatedRow with the type RowElement and update row with an age field set to 23
//
// Finally, call the updateRow and deleteRow commands.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var CRUD = require("./crud");
var row = {
    firstName: 'Brian',
    lastName: 'Lema',
};
var newRowID = CRUD.insertRow(row);
var updatedRow = __assign({ age: 23 }, row);
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
