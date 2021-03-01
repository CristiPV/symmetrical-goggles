import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../../services/to-do.service'
import ToDo from '../../models/ToDo';

@Component({
  selector: 'template-workspace-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  toDoList: ToDo[];

  constructor( private toDoService: ToDoService ) { 
  }

  ngOnInit(): void {
    this.toDoService.getToDoList( 5 ).subscribe( toDoList => {
      this.toDoList = toDoList;
    } );
   }

   deleteToDo( toDo: ToDo ): void {
      this.toDoList = this.toDoList.filter( t => {
        return t.id !== toDo.id;
      } );

      this.toDoService.deleteToDo( toDo ).subscribe( toDo => {
        console.log( toDo );
      } );
   }

   addToDo( toDo: ToDo ): void {
      this.toDoService.addToDo( toDo ).subscribe( toDo => {
        this.toDoList.push( toDo );
        console.log( toDo );
      } );
   }
}
