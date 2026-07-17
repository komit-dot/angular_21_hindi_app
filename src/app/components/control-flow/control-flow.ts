import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {

  selectedCaste:string = '';

  isStudentActive = signal<boolean> (true)
  changeStatus(value: boolean){
    this.isStudentActive.set(value)
  }

  cityList = ['Lucknow', 'Bangalore', 'Ahmedabad','Hyderabad']

  studentList = [
     {name:'aaa', age: 33, email: 'abc@gmail.com',status: true},
     {name:'bbb', age: 33, email: 'abc@gmail.com',status: false},
     {name:'ccc', age: 33, email: 'abc@gmail.com',status: false},
     {name:'ddd', age: 33, email: 'abc@gmail.com',status: true}

  ]




}