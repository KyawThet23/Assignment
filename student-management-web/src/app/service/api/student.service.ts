import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StuSUb } from 'src/app/pages/StuSub';
import { mark } from 'src/app/pages/mark';
import { student } from 'src/app/pages/student';

@Injectable({ providedIn: 'any' })
export class StudentService {
  constructor(private http: HttpClient) {}

  getStudentById(id: number): Observable<student> {
    const url = 'http://localhost:8080/student';
    const find = `${url}/${id}`;
    return this.http.get<student>(find);
  }

  getStudentByYear(year: String): Observable<student[]> {
    const url = 'http://localhost:8080/student/year';
    const yaer_url = `${url}/${year}`;
    return this.http.get<student[]>(yaer_url);
  }

  getStudentByName(name: String): Observable<student[]> {
    const url = 'http://localhost:8080/student/search';
    const search_url = `${url}/${name}`;
    return this.http.get<student[]>(search_url);
  }

  getAllStudent(): Observable<student[]> {
    const url = 'http://localhost:8080/student/list';
    return this.http.get<student[]>(url);
  }

  create(student: student): Observable<student> {
    const url = 'http://localhost:8080/student/create';
    return this.http.post<student>(url, student);
  }

  deleteById(id: number): Observable<void> {
    const url = 'http://localhost:8080/student/delete';
    const delete_url = `${url}/${id}`;
    return this.http.delete<void>(delete_url);
  }

  updateById(id: number, student: student): Observable<student> {
    const url = 'http://localhost:8080/student/update';
    const update = `${url}/${id}`;
    return this.http.put<student>(update, student);
  }

  addMark(stuId: number, subId: number, mark: number): Observable<StuSUb> {
    const url = 'http://localhost:8080/student/mark';
    const mark_url = `${url}/${stuId}/${subId}/${mark}`;
    return this.http.post<StuSUb>(mark_url, null);
  }

  getSubjectsByid(id: number): Observable<[]> {
    const url = 'http://localhost:8080/student/mark';
    const mark_id = `${url}/${id}`;
    return this.http.get<[]>(mark_id);
  }
}
