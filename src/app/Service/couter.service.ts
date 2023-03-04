import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CouterService {
  count : number =30;
  constructor() {
  }
  ADD(){
    return this.count=++this.count;
  }
  DEC(){
    this.count=--this.count;
    return this.count;
  }
}
