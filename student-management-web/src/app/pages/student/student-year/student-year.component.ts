import { Component } from '@angular/core';
import { student } from '../../student';
import { StudentService } from 'src/app/service/api/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/name.service';

@Component({
  selector: 'app-student-year',
  templateUrl: './student-year.component.html',
})
export class StudentYearComponent {
  year: any;
  students!: student[];

  constructor(
    private service: StudentService,
    private route: Router,
    private data: DataService
  ) {}

  ngOnInit(): void {
    this.year = this.data.getData();
    const student = this.service
      .getStudentByYear(this.year)
      .subscribe((student) => (this.students = student));
  }
  details(id: number) {
    this.data.setData(id);
    this.route.navigate(['/student/edit']);
  }
  delete(id: number) {
    this.service.deleteById(id).subscribe();
  }
}
