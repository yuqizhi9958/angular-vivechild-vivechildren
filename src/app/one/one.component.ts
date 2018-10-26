import { Component, OnInit, ViewChild,ElementRef,ViewChildren,QueryList } from '@angular/core';
import { One1Component } from "./one1/one1.component";
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  // 子组件示例引用
  @ViewChild(One1Component) ViewChild: One1Component;
  // 子组件自定义属性
  @ViewChild("ad") child: ElementRef;
  // 获取整个列表
  @ViewChildren(One1Component) childCmps: QueryList<One1Component>;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.ViewChild.fun()

    console.dir(this.child.nativeElement);
    
    this.childCmps.forEach((item)=>{
      console.log(item);
      item.fun()
    })
  }
}
