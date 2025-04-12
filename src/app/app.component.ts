import {Component, OnInit} from '@angular/core';
import {PrimeNG} from 'primeng/config';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {HomePageComponent} from './hairy-paws/pages/home-page/home-page.component';
import {Button} from 'primeng/button';
import {NavbarComponent} from './hairy-paws/components/navbar/navbar.component';
import {
  FunctionalitiesPageComponent
} from './hairy-paws/pages/functionalities-page/functionalities-page.component';
import {FooterComponent} from './hairy-paws/components/footer/footer.component';
import {DownloadPageComponent} from './hairy-paws/pages/download-page/download-page.component';
import {PopularPetsPageComponent} from './hairy-paws/pages/popular-pets-page/popular-pets-page.component';
import {BenefitsPageComponent} from './hairy-paws/pages/benefits-page/benefits-page.component';
import {TestimonialsPageComponent} from './hairy-paws/pages/testimonials-page/testimonials-page.component';

@Component({
  selector: 'app-root',
  imports: [TranslateModule, HomePageComponent, NavbarComponent, FunctionalitiesPageComponent, FooterComponent, DownloadPageComponent, PopularPetsPageComponent, BenefitsPageComponent, TestimonialsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private primeng: PrimeNG, private translateService: TranslateService) {}

  ngOnInit() {
    this.translateService.setDefaultLang('es');
    this.primeng.ripple.set(true);
  }

  translate(lang: string) {
    this.translateService.use(lang);
    this.translateService.get('primeng').subscribe(res => this.primeng.setTranslation(res));
  }
}
