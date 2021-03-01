import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'template-workspace-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {
  title: string;
  @Output()
  addToDo: EventEmitter<any> = new EventEmitter();

  constructor( ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const toDo = {
      title: this.title,
      completed: false
    }

    this.addToDo.emit( toDo );
  }
}
