import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { StudentService } from 'src/app/service/api/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
})
export class StudentAddComponent {
  studentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: StudentService,
    private route: Router
  ) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      year: ['', Validators.required],
    });
  }

  onSubmit() {
    const student = this.studentForm.value;
    this.service.create(student).subscribe();
    this.route.navigate(['/student/list']);
  }
}
