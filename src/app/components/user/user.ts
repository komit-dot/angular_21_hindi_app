import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [ReactiveFormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  userForm: FormGroup = new FormGroup({
    userId: new FormControl(0),
    emailId: new FormControl(''),
    password: new FormControl(''),
    fullName: new FormControl(''),
    mobileNo: new FormControl(''),

  });

  onSaveUser(){
    
  }
  
    
  

}
