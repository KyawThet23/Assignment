import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/name.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
})
export class SubjectComponent {
  constructor(private service: DataService, private route: Router) {}

  search(year: string) {
    this.service.setData(year);
  }
}
