import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from 'src/app/service/api/student.service';
import { DataService } from 'src/app/service/name.service';

@Component({
  selector: 'app-student-real-edit',
  templateUrl: './student-real-edit.component.html',
})
export class StudentRealEditComponent implements OnInit {
  id: any;
  studentForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: StudentService,
    private data: DataService
  ) {
    this.studentForm = this.fb.group({
      name: [''],
      email: [''],
      phone: [''],
      dob: [''],
      gender: [''],
      year: [''],
    });
  }
  ngOnInit(): void {
    this.id = this.data.getData();
  }

  onSubmit() {
    const student = this.studentForm.value;
    this.service.updateById(this.id, student).subscribe();
  }
}
