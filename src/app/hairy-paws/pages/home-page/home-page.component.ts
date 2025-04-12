import { Component } from '@angular/core';
import {Ripple} from 'primeng/ripple';
import {StyleClass} from 'primeng/styleclass';
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {Button, ButtonDirective} from 'primeng/button';

@Component({
  selector: 'app-home-page',
  imports: [
    Button
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
