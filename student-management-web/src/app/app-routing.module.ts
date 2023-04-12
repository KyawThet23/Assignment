import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './pages/student/student.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentListComponent } from './pages/student/student-list/student-list.component';
import { StudentNameComponent } from './pages/student/student-name/student-name.component';
import { StudentAddComponent } from './pages/student/student-add/student-add.component';
import { SubjectYearComponent } from './pages/subject/subject-year/subject-year.component';
import { SubjectEditComponent } from './pages/subject/subject-edit/subject-edit.component';
import { SubjectAddComponent } from './pages/subject/subject-add/subject-add.component';
import { SubjectRealEditComponent } from './pages/subject/subject-real-edit/subject-real-edit.component';
import { StudentRealEditComponent } from './pages/student/student-real-edit/student-real-edit.component';
import { StudentEditComponent } from './pages/student/student-edit/student-edit.component';
import { StudentYearComponent } from './pages/student/student-year/student-year.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'student',
    component: StudentComponent,
    children: [
      { path: 'edit', component: StudentEditComponent },
      { path: 'list', component: StudentListComponent },
      { path: 'nameList', component: StudentNameComponent },
      { path: 'add', component: StudentAddComponent },
      { path: 'realEdit', component: StudentRealEditComponent },
      { path: 'year', component: StudentYearComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
  {
    path: 'subject',
    component: SubjectComponent,
    children: [
      { path: 'year', component: SubjectYearComponent },
      { path: 'edit', component: SubjectEditComponent },
      { path: 'add', component: SubjectAddComponent },
      { path: 'realEdit', component: SubjectRealEditComponent },
      { path: '', redirectTo: 'subject/edit', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
