import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit,AfterViewInit, OnDestroy  {

  constructor(){
    console.log('Hello this is constructor')
    // property initialize
  }

  ngOnInit(){
    console.log('this is ngoninit')
  }
  //apicall, subscription

  ngAfterViewInit(): void {
    console.log('ngAftervieinit')
  }

  ngOnDestroy(): void {
    console.log('ngondestroyyyy')
  }

}
