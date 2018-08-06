import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is a simple test.', 'https://get.pxhere.com/photo/restaurant-dish-food-menu-recipe-fast-food-meat-bread-hamburger-sandwich-beer-cook-cheeseburger-gastronomy-slider-burgers-dining-room-appetizer-french-fries-cholesterol-junk-food-finger-food-patty-veggie-burger-breakfast-sandwich-american-food-buffalo-burger-1374894.jpg'),
    new Recipe('Test recipe', 'This is a simple test.', 'https://get.pxhere.com/photo/restaurant-dish-food-menu-recipe-fast-food-meat-bread-hamburger-sandwich-beer-cook-cheeseburger-gastronomy-slider-burgers-dining-room-appetizer-french-fries-cholesterol-junk-food-finger-food-patty-veggie-burger-breakfast-sandwich-american-food-buffalo-burger-1374894.jpg'),
    new Recipe('Test recipe', 'This is a simple test.', 'https://get.pxhere.com/photo/restaurant-dish-food-menu-recipe-fast-food-meat-bread-hamburger-sandwich-beer-cook-cheeseburger-gastronomy-slider-burgers-dining-room-appetizer-french-fries-cholesterol-junk-food-finger-food-patty-veggie-burger-breakfast-sandwich-american-food-buffalo-burger-1374894.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
