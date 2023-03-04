import { Component,Input ,EventEmitter,Output,OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {

  }
  status : boolean = false;
  count! : number
  ADD(){
    this.count= ++this.count
  }

}
