import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-layout-home',
  templateUrl: './layout-home.component.html',
  styleUrls: ['./layout-home.component.scss']
})
export class LayoutHomeComponent {
  @Input() sizeLayout : number = 30
  @Output() countChange = new EventEmitter<number>();
  updateSize(value: any){
    this.countChange.emit(value);
  }
}
