import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
// string, boolean, date, boolean
  courseName: string = 'Angular21 course'
  isActivee: boolean = false;
  currentDate: Date = new Date()
  rollNumber: number = 123;
  minTestLenght = 60;
  spanClassname = 'secondary'



  constructor(){
    console.log(this.courseName)

    this.courseName = 'Angular 21 serries'
    console.log(this.courseName)

    setTimeout(() => {
      this.rollNumber = 9999999999999;
     }, 1000);

  }

  showAlert(para?:string){
    alert('welcome to angular 21')
  }

  cityChange(){
    alert('You are changing the city')
  }

  onscroll(){
    console.log('on window size change')

  }

  onMouseEnter(){
    console.log('mouse Inn')
  }


    



}
