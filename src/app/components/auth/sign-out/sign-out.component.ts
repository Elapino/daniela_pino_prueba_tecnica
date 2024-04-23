import {I18nPluralPipe, NgIf} from '@angular/common';
import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {TranslocoModule} from '@ngneat/transloco';
import {finalize, Subject, takeUntil, takeWhile, tap, timer} from 'rxjs';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [NgIf, RouterLink, I18nPluralPipe, TranslocoModule],
})
export class SignOutComponent implements OnInit, OnDestroy {
  countdown: number = 5;
  countdownMapping: any = {
    '=1': '# segundo',
    'other': '# segundos',
  };
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
      private _router: Router,
  ) { }  

  ngOnInit(): void {
    timer(1000, 1000)
        .pipe(
            finalize(() => {
              this._router.navigate(['sign-in']);
            }),
            takeWhile(() => this.countdown > 0),
            takeUntil(this._unsubscribeAll),
            tap(() => this.countdown--),
        )
        .subscribe();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}