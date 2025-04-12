import { Component } from '@angular/core';
import {Chip} from 'primeng/chip';
import {CarouselOngsComponent} from '../../components/carousel-ongs/carousel-ongs.component';

@Component({
  selector: 'app-functionalities-page',
  imports: [
    Chip,
    CarouselOngsComponent
  ],
  templateUrl: './functionalities-page.component.html',
  styleUrl: './functionalities-page.component.css'
})
export class FunctionalitiesPageComponent {

}
