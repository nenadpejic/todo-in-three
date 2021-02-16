import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  // Set classes dynamically
  setClasses() {
    return {
      'is-completed': this.todo.isCompleted
    }
  }

  setChecked() {
    return this.todo.isCompleted
  }

  onToggle(todo: Todo) {
    const newTodo = {
      ...todo,
      isCompleted: !todo.isCompleted
    }
    this.todoService.putTodoToDB(newTodo).subscribe(todo => {
      this.todo = todo
    })
  }

  onDelete(todo: Todo) {
    this.deleteTodo.emit(todo)
  }
}
