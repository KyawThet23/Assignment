import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/service/api/student.service';
import { DataService } from 'src/app/service/name.service';

@Component({
  selector: 'app-student-name',
  templateUrl: './student-name.component.html',
})
export class StudentNameComponent {
  students: any;
  name: any;

  constructor(
    private nameService: DataService,
    private service: StudentService,
    private data: DataService,
    private route: Router
  ) {
    this.name = this.nameService.getData();
    service
      .getStudentByName(this.name)
      .subscribe((student) => (this.students = student));
  }
  delete(id: number) {
    this.service.deleteById(id).subscribe();
  }
  details(id: number, year: string) {
    this.data.setData(id);
    this.data.setData2(year);
    this.route.navigate(['/student/edit']);
  }
}
