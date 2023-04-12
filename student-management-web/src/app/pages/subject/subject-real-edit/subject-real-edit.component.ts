import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubjectService } from 'src/app/service/api/subject.service';
import { DataService } from 'src/app/service/name.service';

@Component({
  selector: 'app-subject-real-edit',
  templateUrl: './subject-real-edit.component.html',
})
export class SubjectRealEditComponent implements OnInit {
  id: any;
  subjectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: SubjectService,
    private data: DataService
  ) {
    this.subjectForm = this.fb.group({
      name: ['', Validators.required],
      yearLevel: ['', Validators.required],
      semester: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.id = this.data.getData();
  }

  onSubmit() {
    const subject = this.subjectForm.value;
    this.service.update(this.id, subject).subscribe();
  }
}
