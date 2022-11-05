import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from 'src/app/models/ToDo/todo';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  apiUrl = "https://jsonplaceholder.typicode.com/todos";
  constructor(private httpClient : HttpClient) { }

  getToDos() : Observable<ToDo[]>{
    return this.httpClient.get<ToDo[]>(this.apiUrl);
  }
}
