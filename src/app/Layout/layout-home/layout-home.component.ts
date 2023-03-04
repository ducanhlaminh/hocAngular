import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-layout-home',
  templateUrl: './layout-home.component.html',
  styleUrls: ['./layout-home.component.scss']
})
export class LayoutHomeComponent {
@Input() size! :number ;
 pageHome: boolean=false;
  @Output() countChange = new EventEmitter<number>();
  updateSize(value: any){
    this.countChange.emit(value);
  }
}
