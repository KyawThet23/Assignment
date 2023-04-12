import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/service/api/student.service';
import { DataService } from '../../service/name.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
})
export class StudentComponent {
  name: any;
  year: any;

  constructor(private router: Router, private service: DataService) {}

  onSubmit() {
    const name = this.name;
    this.service.setData(name);
    this.router.navigate(['student/nameList']);
  }

  onSelect() {
    this.service.setData(this.year);
    this.router.navigate(['/student/year']);
  }
}
