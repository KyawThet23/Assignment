import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubjectService } from 'src/app/service/api/subject.service';

@Component({
  selector: 'app-subject-add',
  templateUrl: './subject-add.component.html',
})
export class SubjectAddComponent {
  subjectForm: FormGroup;

  constructor(private fb: FormBuilder, private service: SubjectService) {
    this.subjectForm = this.fb.group({
      name: ['', Validators.required],
      yearLevel: ['', Validators.required],
      semester: ['', Validators.required],
    });
  }

  onSubmit() {
    const subject = this.subjectForm.value;
    this.service.createSubject(subject).subscribe();
  }
}
