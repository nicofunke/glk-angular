import { LoginViewComponent } from './views/login-view/login-view.component';
import { ConcertDetailViewComponent } from './views/concert-detail-view/concert-detail-view.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { UndergroundRemainsComponent } from "./views/underground-remains/underground-remains.component";
import { GoehcComponent } from "./views/goehc/goehc.component";
import { ChamaeleonComponent } from "./views/chamaeleon/chamaeleon.component";
import { ImpressumComponent } from "./views/impressum/impressum.component";
import { NicoComponent } from './views/nico/nico.component';

const routes: Routes = [
  { path: "home", component: HomeComponent, data: {animation: "Home"} },
  { path: "goehc", component: GoehcComponent, data: {animation: "Goehc"} },
  { path: "chamaeleon", component: ChamaeleonComponent, data: {animation: "Chamaeleon"} },
  { path: "undergroundremains", component: UndergroundRemainsComponent , data: {animation: "UndergroundRemains"}},
  { path: "impressum", component: ImpressumComponent, data: {animation: "Impressum"} },
  { path: "concert/:id", component: ConcertDetailViewComponent, data: {animation: "ConcertDetails"} },
  { path: "login", component: LoginViewComponent},
  { path: "nico", component: NicoComponent},
  { path: "**", component: HomeComponent, data: {animation: "Home"} }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: "enabled"
    })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
