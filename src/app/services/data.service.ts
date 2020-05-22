import { Athlete } from './../interfaces/athlete';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  _loggedUser = null;

  constructor(private http: HttpClient) { }

  get = (): Observable<Athlete[]> => {
    return this.http.get<Athlete[]>
    ('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json')
    .pipe(catchError((err: HttpErrorResponse) => throwError(err)));
  }

  login = (user: any) => {
    return new Promise((resolve) => {
      return this.http.get('assets/data/users.json')
      .subscribe((users: any[]) => {
        const authenticated = users.find(us => us.email === user.email && us.password === user.password);
        resolve(authenticated);
      });
    });
  }
}
