import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';

import ToDo from '../../models/ToDo';

@Component({
  selector: 'template-workspace-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  @Input() 
  toDo: ToDo;
  @Output()
  deleteToDo: EventEmitter<ToDo> = new EventEmitter();

  constructor( private toDoService: ToDoService ) { }

  ngOnInit(): void {
  }

  // Set Dynamic Classes
  setClasses() {
    const classes = {
      'to-do': true,
      'is-complete': this.toDo.completed
    }

    return classes;
  }

  onToggle( toDo: ToDo ):void {
    // Toggle in UI
    toDo.completed = !toDo.completed;
    // Toggle on Server
    this.toDoService.toggleCompleted( toDo ).subscribe( toDo => {
      console.log( toDo );
      this.toDo = toDo;
    } );
  }

  onDelete( toDo: ToDo ):void {
    this.deleteToDo.emit( toDo );
  }

}
