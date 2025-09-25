import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { decrement, increment, reset } from '../counter.actions';

@Component({
  selector: 'app-my-counter',
  imports: [
    CommonModule
  ],
  templateUrl: './my-counter.html',
  styleUrl: './my-counter.sass',
})
export class MyCounter {
  count$!: Observable<number>;

  constructor(
    private store: Store<{ count: number }>
  ) {
    this.count$ = this.store.select('count');
  }

  increment () {
    this.store.dispatch(increment());
  }

  decrement () {
    this.store.dispatch(decrement());
  }

  reset () {
    this.store.dispatch(reset());
  }
}
