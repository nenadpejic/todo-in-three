import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodosFromDB().subscribe(todos => {
      this.todos = todos
    })
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodoFromDB(todo).subscribe(() => {
      this.todos = this.todos.filter(elem => elem.id !== todo.id);
    });
  }

  addTodo(todo: Todo) {
    this.todoService.postTodoToDB(todo).subscribe(elem => {
      this.todos = [...this.todos, elem]
    })
  }
}
