import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { ICity } from "../interfaces/interfaces";

@Injectable({ providedIn: "root" })
export class NetService {
  apiKey = "AcLwZe0xjjLsGeABoTOeHKKzz3emH5Qx";
  constructor(private http: HttpClient) {
    // http://dataservice.accuweather.com/locations/v1/cities/autocomplete
  }
  getJSON(): Observable<any> {
    return this.http.get("../../assets/mock.json");
  }
  getAutoCompRes(key): Observable<any> {
    const url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?q=${key}&&apikey=${this.apiKey}`;
    // get the relevant data from the mock
    return this.http.get(url);
    // return this.getJSON().pipe(map(json => json.autoComplite));
  }
  getForcast(key): Observable<any> {
    // get the relevant data from the mock
    const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${this.apiKey}`;
    return this.http.get(url);
    // return this.getJSON().pipe(map(json => json.tokyoForcast));
  }
}
