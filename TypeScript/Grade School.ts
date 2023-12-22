interface SchoolRoster {
  [key: string]: string[];
}
export class GradeSchool {
  protected _schoolRoster: SchoolRoster = {};
  roster(): SchoolRoster {
    return JSON.parse(JSON.stringify(this._schoolRoster));
  }
  add(name: string, grade: number): void {
    for (let key in this._schoolRoster) {
      this._schoolRoster[key] = this._schoolRoster[key].filter(
        (student) => student !== name
      );
    }
    if (!this._schoolRoster[grade]) {
      this._schoolRoster[grade] = [name];
    } else {
      this._schoolRoster[grade].push(name);
    }
    this._schoolRoster[grade].sort();
  }
  grade(grade: number): string[] {
    if (!this._schoolRoster[grade]) {
      return [];
    }
    return [...this._schoolRoster[grade]];
  }
}
