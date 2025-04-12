import { Component } from '@angular/core';
import {Carousel} from 'primeng/carousel';
import {PrimeTemplate} from 'primeng/api';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-carousel-ongs',
  imports: [
    NgForOf
  ],
  templateUrl: './carousel-ongs.component.html',
  styleUrl: './carousel-ongs.component.css'
})
export class CarouselOngsComponent {
  images = [
    { src: 'https://i.postimg.cc/Vkn5xZsZ/image.png', alt: 'WUF' },
    { src: 'https://i.postimg.cc/FzYHDDnZ/image.png', alt: 'KP' },
    { src: 'https://i.postimg.cc/9XD9xp9K/image-removebg-preview.png', alt: 'ASPPA' },
    { src: 'https://i.postimg.cc/t4Nn1m0Z/image.png', alt: 'PATITAS DE AMOR' },
    { src: 'https://i.postimg.cc/bYSG0vcj/image-removebg-preview-1.png', alt: 'ASOCIACION PATITAS' },
    { src: 'https://i.postimg.cc/B6rn7x9f/image.png', alt: 'VOZ ANIMAL' },
  ];
}
