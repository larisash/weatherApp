import { Component, OnInit } from "@angular/core";
import { NetService } from "src/app/services/net.service";
import { ICity } from "src/app/interfaces/interfaces";
import { Router } from "@angular/router";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.scss"]
})
export class WeatherComponent implements OnInit {
  cities: ICity[];
  searchKey: string;
  citiesOptions: any;
  selectedCity;
  currentForcast: any;
  fevoriteCities = [];
  currentFevoriteCity: {};
  choosenCity: boolean;
  selectedKey: any;

  constructor(private net: NetService, private router: Router) {}

  ngOnInit() {}

  getOptions(value) {
    this.net.getAutoCompRes(value).subscribe(comp => {
      this.citiesOptions = comp;
    });
  }

  getCity(city) {
    const { name, key } = city;
    this.selectedCity = name;
    this.selectedKey = key;

    // get the relveant city from mocked data by name
    this.net.getForcast(this.selectedKey).subscribe((forcast: any) => {
      console.log("forcast", forcast);
      this.currentForcast = forcast.DailyForecasts;
    });
    this.checkIfInLocalStorege();
  }
  addToFavorites() {
    if (this.choosenCity) {
      return;
    }
    console.log("addd");
    this.currentFevoriteCity = {
      cityName: this.selectedCity,
      cityKey: this.selectedKey,
      forcast: this.currentForcast[0]
    };
    this.choosenCity = true;
    this.fevoriteCities = JSON.parse(localStorage.getItem("favortieCities"));
    this.fevoriteCities.push(this.currentFevoriteCity);

    localStorage.setItem("favortieCities", JSON.stringify(this.fevoriteCities));
  }
  checkIfInLocalStorege() {
    let currentFavoriteCities = JSON.parse(
      localStorage.getItem("favortieCities")
    );

    console.log(
      "what is",
      currentFavoriteCities.find(x => x.cityName === this.selectedCity)
    );
    if (currentFavoriteCities.find(x => x.cityName === this.selectedCity)) {
      this.choosenCity = true;
    } else {
      this.choosenCity = false;
    }

    // tslint:disable-next-line: whitespace
    // this.cityIsFevorite =
  }

  // on change event of the input get the results
}
