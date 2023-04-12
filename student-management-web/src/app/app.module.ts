import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentComponent } from './pages/student/student.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentListComponent } from './pages/student/student-list/student-list.component';
import { StudentNameComponent } from './pages/student/student-name/student-name.component';
import { StudentAddComponent } from './pages/student/student-add/student-add.component';
import { SubjectYearComponent } from './pages/subject/subject-year/subject-year.component';
import { SubjectAddComponent } from './pages/subject/subject-add/subject-add.component';
import { SubjectEditComponent } from './pages/subject/subject-edit/subject-edit.component';
import { CorsInterceptor } from './service/Interceptor/cors.interceptor';
import { SubjectRealEditComponent } from './pages/subject/subject-real-edit/subject-real-edit.component';
import { UtilsModule } from './pages/utils/utils.module';
import { StudentRealEditComponent } from './pages/student/student-real-edit/student-real-edit.component';
import { StudentEditComponent } from './pages/student/student-edit/student-edit.component';
import { StudentYearComponent } from './pages/student/student-year/student-year.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    SubjectComponent,
    StudentListComponent,
    StudentNameComponent,
    StudentAddComponent,
    SubjectYearComponent,
    SubjectAddComponent,
    SubjectEditComponent,
    SubjectRealEditComponent,
    StudentRealEditComponent,
    StudentEditComponent,
    StudentYearComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UtilsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CorsInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
