import { Component } from '@angular/core';
import { filter, from, interval, map, Observable, of, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_practise';

  cityList$ = of(["a","b","c"]);
  capitalList$ = from(['d','e','f']);
  myInterval$ = interval(1000);
  timer$ = timer(5000);
  numberList$ = from([1,2,3,4,5,6,7,8,9,10]);
  rollNumberList$ = of([1,2,3,4,5,6,7,8,9,10]);
  constructor() {

    // this.timer$.subscribe(res=>{
    //   console.log("timer",res)
    // })
    // this.myInterval$.subscribe(val=>{
    //   console.log("interval",val)
    // })
    // this.capitalList$.subscribe(val=>{
    //   console.log(val);
    // })
    // this.cityList$.subscribe(value=>{
    //   console.log(value)
    // })
    // const myObs$ = new Observable(value => {
    //   value.next("Hello");
    // });

    // myObs$.subscribe(message => {
      
    //   console.log(message)
    // })

    // this.numberList$.pipe(filter(num => num%2===0)).subscribe(res=>{
    //   console.log(res)
    // })

    // this.numberList$.pipe(filter(num=> num%2!==0)).subscribe(res=>{
    //   console.log(res);
    // })

    this.rollNumberList$.pipe(map(arr=>arr.filter(num=>num%2 === 0))).subscribe(res=>{
      console.log(res)
    })
  }
}
