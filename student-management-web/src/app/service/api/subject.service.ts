import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { subject } from 'src/app/pages/subject';

@Injectable({ providedIn: 'any' })
export class SubjectService {
  constructor(private http: HttpClient) {}

  BASE_URL = 'http://localhost:8080/subject';

  getAllSubject(): Observable<subject[]> {
    const url = `${this.BASE_URL}/${'list'}`;
    return this.http.get<subject[]>(url);
  }

  getAllSubjectByYear(year: string): Observable<subject[]> {
    const base = 'http://localhost:8080/subject/year';
    const url = `${base}/${year}`;
    return this.http.get<subject[]>(url);
  }

  createSubject(subject: subject): Observable<subject> {
    const url = 'http://localhost:8080/subject/create';
    return this.http.post<subject>(url, subject);
  }

  deleteById(id: number): Observable<void> {
    const base = 'http://localhost:8080/subject/delete';
    const url = `${base}/${id}`;
    return this.http.delete<void>(url);
  }

  update(id: number, subject: subject): Observable<subject> {
    const base = 'http://localhost:8080/subject/update';
    const url = `${base}/${id}`;
    return this.http.put<subject>(url, subject);
  }
}
