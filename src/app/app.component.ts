import { Component } from '@angular/core';
import { filter, from, interval, map, Observable, of, timer } from 'rxjs';
import { Router } from '@angular/router';
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
  constructor(private router: Router) { }


    clearRoute() {
      this.router.navigate(['']);
    }

    goToProduct(){
      this.router.navigate(['product']);
      alert("navigated to product");
    }
  }

