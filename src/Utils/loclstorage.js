
var addStudent = (student) => {

    var students = localStorage.getItem("students");
    var studentsObject = JSON.parse(students);
    if(!studentsObject) {
        studentsObject = [];   
    } 
    studentsObject.push(student);
    localStorage.setItem('students', JSON.stringify(studentsObject))
}

var getStudents = () => {
    var students = localStorage.getItem("students");
    var studentsObject = JSON.parse(students);
    return studentsObject;
}

var deleteStudent = (index) => {
    var students = localStorage.getItem("students");
    var studentsObject = JSON.parse(students);

    studentsObject.forEach(function(student,originalIndex){

        if(index === originalIndex){
            studentsObject.pop(index)
        }
  
      });
      localStorage.setItem('students', JSON.stringify(studentsObject))  
}

module.exports = {
    addStudent,
    getStudents,
    deleteStudent
}