import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDataService {
  baseUrl: string =
    'https://employee-dir1-default-rtdb.asia-southeast1.firebasedatabase.app/';
  constructor(private http: HttpClient) {}
  fetchEmployee(id: string) {
    return this.http.get(this.baseUrl + 'employees/' + id + '.json');
  }
}
