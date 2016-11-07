import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'پاکستان';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('ur');
  }
  urdu() {
    this.translate.use('ur');
  }
  romanurdu() {
    this.translate.use('romanurdu');
  }
}
