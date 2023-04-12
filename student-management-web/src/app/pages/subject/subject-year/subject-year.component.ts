import { Component } from '@angular/core';
import { SubjectService } from 'src/app/service/api/subject.service';
import { DataService } from 'src/app/service/name.service';
import { subject } from '../../subject';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject-year',
  templateUrl: './subject-year.component.html',
})
export class SubjectYearComponent {
  year: any;
  subjects!: subject[];
  id: any;

  constructor(
    private subjectService: SubjectService,
    private service: DataService,
    private route: Router
  ) {
    this.year = this.service.getData();
    subjectService
      .getAllSubjectByYear(this.year)
      .subscribe((subject) => (this.subjects = subject));
  }

  delete(id: number) {
    this.subjectService.deleteById(id).subscribe();
  }

  edit(id: number) {
    this.id = this.service.setData(id);
    this.route.navigate(['/subject/realEdit']);
  }
}
