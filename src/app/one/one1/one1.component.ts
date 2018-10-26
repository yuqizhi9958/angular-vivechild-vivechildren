import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one1',
  templateUrl: './one1.component.html',
  styleUrls: ['./one1.component.css']
})
export class One1Component implements OnInit {
  abc = "abc"
  name = "robot"
  constructor() { }

  ngOnInit() {
  }
  fun(){
    alert("one1")
  }

}
