import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {SelectButton} from 'primeng/selectbutton';
import {PrimeTemplate} from 'primeng/api';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  imports: [
    ReactiveFormsModule,
    SelectButton,
    PrimeTemplate
  ],
  styleUrl: './theme-selector.component.css'
})
export class ThemeSelectorComponent {
  formGroup: FormGroup;
  stateOptions = [
    { icon: 'pi pi-sun', value: 'light' },
    { icon: 'pi pi-moon', value: 'dark' }
  ];

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      theme: ['light']
    });

    this.formGroup.get('theme')?.valueChanges.subscribe(value => {
      this.toggleDarkMode(value);
    });
  }

  toggleDarkMode(theme: string) {
    const element = document.querySelector('html');
    if (theme === 'dark') {
      element?.classList.add('my-app-dark');
    } else {
      element?.classList.remove('my-app-dark');
    }
  }
}
