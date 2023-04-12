import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/service/api/student.service';
import { DataService } from 'src/app/service/name.service';
import { mark } from '../../mark';
import { student } from '../../student';
import { ModalComponent } from '../../utils/modal/modal.component';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
})
export class StudentEditComponent {
  @ViewChild(ModalComponent)
  dialog?: ModalComponent;

  subject!: [];
  student!: student;
  id: any;
  year: any;
  mark!: number;

  constructor(
    private studentService: StudentService,
    private dataService: DataService,
    private route: Router
  ) {
    this.id = dataService.getData();
    this.studentService
      .getStudentById(this.id)
      .subscribe((student) => (this.student = student));
    this.studentService
      .getSubjectsByid(this.id)
      .subscribe((mark) => (this.subject = mark));
  }

  update(id: number) {
    this.dataService.setData(id);
    this.route.navigate(['/student/realEdit']);
  }
  onButtonClick(mark: string, subId: number) {
    this.mark = parseInt(mark);
    this.studentService.addMark(this.id, subId, this.mark).subscribe();
    this.route.navigate(['/student/edit ']);
  }
}
