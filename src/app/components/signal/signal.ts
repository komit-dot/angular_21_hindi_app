import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  //styleUrl: './signal.css',
})
export class Signal {
  courseName: string = 'Angular Signal Course';

  angularVersion = signal('20');
  courseDuration = signal<string>('2 Months');
  cityList = signal<string[]>(['Pune', 'Mumbai']);
  studentobj = signal<any>({
    name: 'harsh',
    city: 'Lucknow',
  });

  coursechange() {
    this.courseDuration.set('32 Months');
    this.courseName = 'React.js';
  }

  addCity(cityName: string) {
    this.cityList.update((old: string[]) => [...old, cityName]);
  }

  changeCity() {
    this.studentobj.update((oldObj: any) => ({ ...oldObj, city: 'Ghaziabad' }));
  }
}
