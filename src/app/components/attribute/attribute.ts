import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  imports: [NgClass, NgStyle],
  templateUrl: './attribute.html',
  styleUrl: './attribute.css',
})
export class Attribute {
  studentList = [
     {name:'aaa', age: 33, email: 'abc@gmail.com',status: true},
     {name:'bbb', age: 33, email: 'abc@gmail.com',status: false},
     {name:'ccc', age: 33, email: 'abc@gmail.com',status: false},
     {name:'ddd', age: 33, email: 'abc@gmail.com',status: true}
  ]

  themeClass:String = 'bg-success';
  themeBgClass:String = 'bg-primary';
  textColor = 'purple';
  myCss: any = {
    'background-color': 'green',
    'color': 'white',
    'font-size': '80px'


  }


}
