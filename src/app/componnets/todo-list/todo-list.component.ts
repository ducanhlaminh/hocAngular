import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/common/TodoItem';
import { TodoItemService } from 'src/app/Service/todo-item.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList! : TodoItem[]
  valueText:string='name'
  constructor(public TodoItemService : TodoItemService){
    console.log('contrusc');
    this.todoList=this.TodoItemService.getTodo()
  }
  ngOnInit(): void {

    console.log('init');

  }
  addTodo(){
    this.TodoItemService.post(new TodoItem(this.valueText,'complete'));
    this.valueText=""
    this.todoList= this.TodoItemService.getTodo()
  }
  deleteTodo(index: number){
    this.TodoItemService.delete(index);
    this.todoList= this.TodoItemService.getTodo()
  }

}
