// import { Component, ChangeDetectionStrategy } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { clear, countSelector, decrease, increase, updatedAtSelector } from '../../store/form';
// import { map } from 'rxjs/operators';

// @Component({
//   selector: 'app-test',
//   templateUrl: './test.component.html',
//   styleUrls: ['./test.component.css'],
//   changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class TestComponent {

//   count$ = this.store.select(countSelector);
//   cannotDecrease$ = this.count$.pipe(map(count => count <= 0));
//   updatedAt$ = this.store.select(updatedAtSelector);

//   constructor(private store: Store) {
//   }

//   increase(): void {
//     this.store.dispatch(increase());
//   }

//   decrease(): void {
//     this.store.dispatch(decrease());
//   }

//   clear(): void {
//     this.store.dispatch(clear());
//   }
// }
