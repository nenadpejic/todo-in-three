import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo = {
      id: uuidv4(),
      title: this.title,
      isCompleted: false
    }
    this.addTodo.emit(todo);
    this.title = '';
  }
}
