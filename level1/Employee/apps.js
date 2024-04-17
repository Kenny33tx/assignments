
function Employee(Name, Jobtitle, Salary, Status){
this.Name = Name;
this.Jobtitle = Jobtitle;
this.Salary = Salary;
this.Status = Status;
this.employeeStatus = employeeStatus
//this.newStatus = function(){
  //  console.log(this.employeeStatus)
//}

Employee.prototype.newStatus = function(){
    console.log(this.Status)
}

}

var Bob = new Employee('bob', 'Vschool Instructor', '100k', 'Contract')
var Sally = new Employee('Sally', "Pilot", "330k", 'Full Time' )
Bob.newStatus()
console.log(Bob)
console.log(Sally)