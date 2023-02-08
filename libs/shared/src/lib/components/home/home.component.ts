import { Component } from '@angular/core';
import { Observable, of } from "rxjs";

@Component({
  selector: 'math-express-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  user$: Observable<any> | undefined;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  ngOnInit() {
    this.user$ = of('');
  }
}
