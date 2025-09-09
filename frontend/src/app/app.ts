import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NgxStarsModule } from 'ngx-stars';
import { Header } from "./components/partials/header/header";
import { Home } from './components/pages/home/home';  
import { CommonModule } from '@angular/common';  
import { Search } from './components/partials/search/search'; 
@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [
    RouterOutlet,
    RouterLink,
    Header,
    Home,
    NgxStarsModule,
    CommonModule  
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('frontend');
}
