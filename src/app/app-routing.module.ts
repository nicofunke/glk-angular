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
  { path: "home", component: HomeComponent },
  { path: "goehc", component: GoehcComponent },
  { path: "chamaeleon", component: ChamaeleonComponent },
  { path: "undergroundremains", component: UndergroundRemainsComponent },
  { path: "impressum", component: ImpressumComponent},
  { path: "concert/:id", component: ConcertDetailViewComponent },
  { path: "login", component: LoginViewComponent},
  { path: "nico", component: NicoComponent},
  { path: "**", component: HomeComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: "enabled"
    })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
