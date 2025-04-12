import { Component } from '@angular/core';
import {Ripple} from "primeng/ripple";
import {StyleClass} from "primeng/styleclass";
import {ButtonDirective} from 'primeng/button';
import {ThemeSelectorComponent} from '../theme-selector/theme-selector.component';

@Component({
  selector: 'app-navbar',
  imports: [
    Ripple,
    StyleClass,
    ButtonDirective,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
