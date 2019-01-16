import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { UndergroundRemainsComponent } from "./views/underground-remains/underground-remains.component";
import { GoehcComponent } from "./views/goehc/goehc.component";
import { ChamaeleonComponent } from "./views/chamaeleon/chamaeleon.component";
import { ImpressumComponent } from "./views/impressum/impressum.component";

const routes: Routes = [
  { path: "home", component: HomeComponent, data: {animation: "Home"} },
  { path: "goehc", component: GoehcComponent, data: {animation: "Goehc"} },
  { path: "chamaeleon", component: ChamaeleonComponent, data: {animation: "Chamaeleon"} },
  { path: "undergroundremains", component: UndergroundRemainsComponent , data: {animation: "UndergroundRemains"}},
  { path: "impressum", component: ImpressumComponent, data: {animation: "Impressum"} },
  { path: "**", component: HomeComponent, data: {animation: "Home"} }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
