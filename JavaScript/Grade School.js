export class GradeSchool {
  constructor() {
    this.students = {};
  }

  roster() {
    return JSON.parse(JSON.stringify(this.students));
  }

  add(name, grade) {
    if (this.students[grade]) {
      this.students[grade].push(name);
      this.students[grade].sort();
    } else {
      this.students[grade] = [name];
    }
  }

  grade(grade) {
    if (this.students[grade]) {
      return [...this.students[grade]]; 
    } else {
      return [];
    }
  }
}
