import { Injectable } from '@angular/core';
import { TodoItem } from '../common/TodoItem';
@Injectable({
  providedIn: 'root',
})
export class TodoItemService {
  createTodo(){
    let todos : TodoItem[] ;
    todos = [new TodoItem('angular','pending'),new TodoItem('react','complete')];
    return todos;
  }
}
