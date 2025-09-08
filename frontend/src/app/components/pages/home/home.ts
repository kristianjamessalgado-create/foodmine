import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgxStarsModule } from 'ngx-stars';  // <-- Import here
import { Food } from '../../../shared/models/food';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, RouterLink, NgxStarsModule,CommonModule],  // <-- Add here
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  foods: Food[] = [];

  constructor(private foodService: FoodService) {
    this.foods = foodService.getAll();
  }

  ngOnInit(): void {}
}
