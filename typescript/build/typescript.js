"use strict";
class details {
    constructor(empid, empname, empdesignation, empsalary, empproject) {
        this.empid = empid;
        this.empname = empname;
        this.empdesignation = empdesignation;
        this.empsalary = empsalary;
        this.empproject = empproject;
    }
    display() {
        console.log(`Name: ${this.empname} \nID: ${this.empid} \nDesignation: ${this.empdesignation} \nSalary: ${this.empsalary} \nProject: ${this.empproject}`);
    }
}
let obj = new details(100, "Srikanth", "Watchman", 1000, "A Random project");
obj.display();
