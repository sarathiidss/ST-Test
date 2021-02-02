import { Component, EventEmitter, Input,  OnChanges,    OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnChanges{

  @Input() data = "";
  @Output() demo = new EventEmitter();
  @Input() demo1;
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  ngOnInit() {
    this.demo1;
  }

  show(){
    this.demo.emit(this.data)
  }

}