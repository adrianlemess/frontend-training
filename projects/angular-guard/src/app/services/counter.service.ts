import { Injectable } from '@angular/core';
import { Observable, of, interval } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

getSingleValueObservable() {
  return of('single value');
}

getDelayedValueObservable() {
  return of('delayed value').pipe(delay(2000));
}

getMultiValueObservable() {
  return new Observable<number>(observer => {
    let count = 0;
    const interval = setInterval(() => {
      observer.next(count++);
      console.log('interval fired');
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
}

}
