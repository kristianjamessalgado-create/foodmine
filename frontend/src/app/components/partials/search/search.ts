import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
searchTerm: string = '';
constructor(activatedRoute: ActivatedRoute, private router:Router) {   
  activatedRoute.params.subscribe((params) => {
    if (params.searchTerm){
      this.searchTerm = params.searchTerm;
    } else {  
      this.searchTerm = '';
    } 
  });
}
  ngOnInIt(): void 
  {

  }

  search(term: string): void {
    if (term) {
      this.router.navigateByUrl('/search/' + term);
    }
}
}
