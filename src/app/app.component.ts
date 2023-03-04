import { Component ,HostListener,Input, OnInit} from '@angular/core';
import { TodoItem } from './common/TodoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  // date :  Date = new Date(2002,3,28);
  @Input() size:number=40
  constructor(){
  }


  listProduct : Array<string> = [ 'TV','PC','IP'];
  dropDownValue = this.listProduct[0];
    onChange(value:any){
     this.dropDownValue=value.target.value
    }
    updateSize(value: any){
      this.size = value
    }
}
