import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  currentFavoriteCities: any;

  constructor() { }

  ngOnInit() {
    this.getFromLocalStorge();
  }
  getFromLocalStorge(){
    this.currentFavoriteCities = JSON.parse(
      localStorage.getItem("favortieCities")
    );
  }

}
