import { Component,Input ,EventEmitter,Output,OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    this.countChange.emit(this.count);
  }
  listItem =['Increase', 'Decrease', 'Todo-List'];
  status : boolean = false;
  count : number = 30
  @Output() countChange = new EventEmitter<number>();
  onClick(value:string){
    (value === 'Increase')? this.count = ++this.count:(value==='Decrease')? this.count=--this.count:''
    this.countChange.emit(this.count);
  }
}
