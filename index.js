let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    { course: 'INFO 1603', grades: [ 89, 34, 67 ] },
    { course: 'INFO 1601', grades: [ 89, 34, 67 ] }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    { course: 'INFO 1601', grades: [ 100, 89, 79 ] }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    { course: 'INFO 1600', grades: [ 89, 34, 67 ] }
  ]
};

const students = [bob, sally, paul];

function getAverageGrade(student, course) {
  for (let i=0; i < student.transcript.length; i++) {
    if (student.transcript[i].course === course) {
      let sum = 0;
      for (let j=0; j < student.transcript[i].grades.length; j++) {
        sum += student.transcript[i].grades[j];
      }
      return sum / student.transcript[i].grades.length;
    }
  }
  return -1;
}


function getAssignmentMark(student, course, num) {
  for (let i=0; i < student.transcript.length; i++) {
    if (student.transcript[i].course === course) {
      if (num-1 >= 0 && num-1 < student.transcript[i].grades.length) {
        return student.transcript[i].grades[num-1];
      }
    }
  }
  return -1;
}


function averageAssessment(students, courseName, assignment) {
  let sum = 0;
  let count = 0;

  for (let s of students) {
    let mark = getAssignmentMark(s, courseName, assignment);
    if (mark !== -1) {
      sum += mark;
      count++;
    }
  }

  return count > 0 ? sum / count : -1;
}


console.log("=========================================================");

console.log("Average grade for "+ bob.fname+ " " + bob.lname + " in INFO 1603: " + getAverageGrade(bob, 'INFO 1603'));
console.log("Average grade for "+ sally.fname+ " " + sally.lname + " in INFO 1601: " + getAverageGrade(sally, 'INFO 1601'));
console.log("Average grade for "+ paul.fname+ " " + paul.lname + " in INFO 1600: " + getAverageGrade(paul, 'INFO 1600'));


console.log("=========================================================");
console.log("Bob INFO 1603 assignment 2:", getAssignmentMark(bob, 'INFO 1603', 2));
console.log("Sally INFO 1601 assignment 1:", getAssignmentMark(sally, 'INFO 1601', 1));
console.log("Paul INFO 1600 assignment 3:", getAssignmentMark(paul, 'INFO 1600', 3));
console.log("Bob INFO 1601 assignment 5 (doesn't exist):", getAssignmentMark(bob, 'INFO 1601', 5));


console.log("=========================================================");
console.log("Average INFO 1601 assignment 1:", averageAssessment(students, 'INFO 1601', 1));
console.log("Average INFO 1603 assignment 1:", averageAssessment(students, 'INFO 1603', 1));
console.log("Average INFO 1600 assignment 3:", averageAssessment(students, 'INFO 1600', 3));
console.log("Average INFO 1602 assignment 1 (non-existent):", averageAssessment(students, 'INFO 1602', 1));

console.log("=========================================================");