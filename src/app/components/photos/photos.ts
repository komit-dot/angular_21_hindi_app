import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  imports: [],
  templateUrl: './photos.html',
  styleUrl: './photos.css',
})
export class Photos  implements OnInit{

  photosList: any[] = [];
  http = inject(HttpClient)

  //constructor(private http:HttpClient){
  //}

  ngOnInit(): void {
    //debugger
    this.getAllPhotos();
  }

  getAllPhotos(){
    //debugger
    this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe((result: any)=>{
      this.photosList = result
      console.log("this is data",result)

    })

  }

}
