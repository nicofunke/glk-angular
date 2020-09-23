import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/sites/home/home.component';
import { ConcertDetailsComponent } from './components/sites/concert-details/concert-details.component';
import { ConcertsSiteComponent } from './components/sites/concerts-site/concerts-site.component';
import { ImprintComponent } from './components/sites/imprint/imprint.component';
import { ContactSiteComponent } from './components/sites/contact-site/contact-site.component';


const routes: Routes = [
  { path: "home", component: HomeComponent},
  { path: "concert/:id", component: ConcertDetailsComponent },
  { path: "concerts", component: ConcertsSiteComponent},
  { path: "imprint", component: ImprintComponent},
  { path: "contact", component: ContactSiteComponent},
  { path: "**", redirectTo: "home"}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
