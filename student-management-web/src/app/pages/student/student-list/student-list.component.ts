import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/api/student.service';
import { student } from '../../student';
import { DataService } from 'src/app/service/name.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
})
export class StudentListComponent implements OnInit {
  students!: student[];

  constructor(
    private service: StudentService,
    private data: DataService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.service.getAllStudent().subscribe((student) => {
      this.students = student;
    });
  }

  delete(id: number) {
    this.service.deleteById(id).subscribe();
  }

  details(id: number) {
    this.data.setData(id);
    this.route.navigate(['/student/edit']);
  }
}
