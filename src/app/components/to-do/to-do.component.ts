import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/ToDo/todo';
import { ToDoService } from 'src/app/services/ToDo/to-do.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor(private toDoService : ToDoService) { }
  todos:ToDo[] = [];
  dataLoaded = false;
  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(){
    this.toDoService.getToDos().subscribe(response=>{
      this.todos = response;
      this.dataLoaded = true; 
    })
  }
}
