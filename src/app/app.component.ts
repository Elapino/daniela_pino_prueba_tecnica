import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  
  title = 'angular-i18n-transloco';
  selectLang = 'es';

  constructor(private translocoService: TranslocoService) {
    this.selectLanguage();
  }

  selectLanguage(language: string = this.selectLang) {
    this.translocoService.setActiveLang(language);
  }

}