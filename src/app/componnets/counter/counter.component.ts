import { Component, Input} from '@angular/core';
import { CouterService } from 'src/app/Service/couter.service';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counter! : number
   constructor(public CouterService: CouterService){
    this.counter =this.CouterService.count;
   }
   onDec(){
    this.counter = this.CouterService.DEC();
   }
   onAdd(){
    this.counter = this.CouterService.ADD();
   }
}
