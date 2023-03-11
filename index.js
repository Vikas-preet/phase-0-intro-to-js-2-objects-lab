// Write your solution in this file!
const employee = {name: "Jason", 
                  streetAddress: "6774, 133st. Surrey, BC."};
function updateEmployeeWithKeyAndValue (employee, name, streetAddress)  
{
    const newEmployee = { ...employee};
     newEmployee [name] = streetAddress;
     return newEmployee;
}   

function destructivelyUpdateEmployeeWithKeyAndValue (employee, name, streetAddress)
{
    employee [name] = streetAddress;
    return employee;
}
function deleteFromEmployeeByKey (employee, name, streetAddress)
{
    const newEmployee = { ...employee};
    delete newEmployee.name;
    return newEmployee;

}
function destructivelyDeleteFromEmployeeByKey (employee, name, streetAddress){
    delete employee.name;
    return employee;
}
