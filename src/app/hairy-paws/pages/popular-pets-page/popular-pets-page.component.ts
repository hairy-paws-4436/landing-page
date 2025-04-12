import { Component } from '@angular/core';
import {CarouselOngsComponent} from '../../components/carousel-brands/carousel-ongs.component';
import {Chip} from 'primeng/chip';
import {Button, ButtonDirective, ButtonLabel} from 'primeng/button';
import {Ripple} from 'primeng/ripple';

@Component({
  selector: 'app-popular-pets-page',
  imports: [
    Chip,
    ButtonDirective,
    Ripple,
    Button,
  ],
  templateUrl: './popular-pets-page.component.html',
  styleUrl: './popular-pets-page.component.css'
})
export class PopularPetsPageComponent {

}
