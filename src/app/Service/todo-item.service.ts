import { Injectable } from '@angular/core';
import { TodoItem } from '../common/TodoItem';
@Injectable({
  providedIn: 'root',
})
export class TodoItemService {
  public todos! : TodoItem[]
  constructor( ){
    this.todos = [new TodoItem('angular','pending'),new TodoItem('react','complete')];
  }
  getTodo(){
    return  this.todos;
  }
  post(data : TodoItem){
     this.todos= [...this.todos,data];

  }
  delete(index : number){
    this.todos= this.todos.filter((todo,idx)=>index!==idx);
    console.log(this.todos);

  }

}
