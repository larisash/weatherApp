import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WeatherComponent } from "./component/weather/weather.component";
import { FavoritesComponent } from "./component/favorites/favorites.component";

const routes: Routes = [
  { path: "weather", component: WeatherComponent },
  { path: "favorites", component: FavoritesComponent },

  { path: "", redirectTo: "/weather", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
