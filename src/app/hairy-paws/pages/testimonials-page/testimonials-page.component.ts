import {Component, OnInit} from '@angular/core';
import {Chip} from 'primeng/chip';
import {Avatar} from 'primeng/avatar';
import {Rating} from 'primeng/rating';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-testimonials-page',
  imports: [
    Chip,
    FormsModule,
    NgForOf
  ],
  templateUrl: './testimonials-page.component.html',
  styleUrl: './testimonials-page.component.css'
})
export class TestimonialsPageComponent implements OnInit {
  testimonials = [
    {
      image: 'https://i.postimg.cc/1z8CX6K1/image.png',
      rating: 5,
      ratingText: '5.0 stars',
      comment: '"Using Hairy Paws was an incredible experience. The team was very supportive and helped me find the perfect furry friend. Highly recommended!"',
      name: 'Charlie Johnson',
      location: 'From New York, US'
    },
    {
      image: 'https://i.postimg.cc/KzL0r2V9/image.png',
      rating: 5,
      ratingText: '5.0 stars',
      comment: '"I was so nervous about adopting, but Hairy Paws made the entire process seamless. They really care about matching pets with loving homes."',
      name: 'Daniel Wong',
      location: 'From Toronto, Canada'
    },
    {
      image: 'https://i.postimg.cc/1z8CX6K1/image.png',
      rating: 5,
      ratingText: '5.0 stars',
      comment: '"Adopting through Hairy Paws has been the best decision I made! My new dog is a perfect fit, and the adoption process was so simple and transparent."',
      name: 'Sarah Miller',
      location: 'From London, UK'
    }
  ];
  constructor() { }

  ngOnInit(): void { }
}

