import { Component ,HostListener,Input} from '@angular/core';
import { TodoItem } from './common/TodoItem';
import { TodoItemService } from './Service/todo-item.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  date :  Date = new Date(2002,3,28);
  size!:number
  listTodo
  constructor(){
    console.log(this.listTodo)
  }
  valueText:string='name'
  listProduct : Array<string> = [ 'TV','PC','IP'];
  dropDownValue = this.listProduct[0];
    onChange(value:any){
     this.dropDownValue=value.target.value
    }
    updateSize(value: any){
      this.size = value
    }
}
