/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import ToDo from '../models/ToDo';
import { Observable } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';

const httpOptions = {
  headers: new HttpHeaders( {
    'Content-Type': 'application/json'
  } )
};

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  toDoListUrl: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor( private http: HttpClient ) { }

  getToDoList( limit?: number ): Observable<ToDo[]> {
    let url: string = this.toDoListUrl;
    if ( limit && limit > 0 ) {
      url += '?_limit=' + limit;
    }
    return this.http.get<ToDo[]>( url );
  }

  deleteToDo( toDo: ToDo ): Observable<any> {
    const url: string = `${this.toDoListUrl}/${toDo.id}`;
    return this.http.delete( url, httpOptions );
  }

  addToDo( toDo: ToDo ): Observable<ToDo> {
    const url: string = this.toDoListUrl;
    return this.http.post<ToDo>( url, toDo, httpOptions );
  }

  toggleCompleted( toDo: ToDo ): Observable<any> {
    const url: string = `${this.toDoListUrl}/${toDo.id}`;
    return this.http.put( url, toDo, httpOptions );
  }
}
