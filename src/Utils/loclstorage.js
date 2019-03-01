
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
    return studentsObject ? studentsObject: [];
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

var addTeacher = (teacher) =>{

    var teachers = localStorage.getItem("teachers");
    var teachersObjet = JSON.parse(teachers);
    if(!teachersObjet){
        teachersObjet = [];
    }
    teachersObjet.push(teacher);
    localStorage.setItem("teachers", JSON.stringify(teachersObjet));
}

var viewTeachers = () => {
    var teachers = localStorage.getItem("teachers");
    var teachersObjet = JSON.parse(teachers);
  
    
    return teachersObjet ? teachersObjet : [];
}

var deleteTeacher = (index) =>{
    var teachers = localStorage.getItem("teachers");
    var teachersObjet = JSON.parse(teachers);

    teachersObjet.forEach(function(teacher,originalIndex){

        if(index === originalIndex){
            teachersObjet.pop(index)
        }
  
      });
    
    localStorage.setItem("teachers", JSON.stringify(teachersObjet));
}

var getTeacherById = (index) => {
    var teachers = localStorage.getItem("teachers");
    var teachersObjet = JSON.parse(teachers);

    return teachersObjet[index];
}

module.exports = {
    addStudent,
    getStudents,
    deleteStudent,
    addTeacher,
    viewTeachers,
    deleteTeacher,
    getTeacherById
}