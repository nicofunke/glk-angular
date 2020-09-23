import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/sites/home/home.component';
import { NavbarComponent } from './components/general/navbar/navbar.component';
import { FooterComponent } from './components/general/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GroupsComponent } from './components/sections/groups/groups.component';
import { NextShowsComponent } from './components/sections/next-shows/next-shows.component';
import { AboutUsComponent } from './components/sections/about-us/about-us.component';
import { HttpClientModule } from '@angular/common/http';
import { ConcertDetailsComponent } from './components/sites/concert-details/concert-details.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import { ConcertsSiteComponent } from './components/sites/concerts-site/concerts-site.component';
import { ContactSiteComponent } from './components/sites/contact-site/contact-site.component';
import { ImprintComponent } from './components/sites/imprint/imprint.component';
import { LastShowsComponent } from './components/sections/last-shows/last-shows.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    GroupsComponent,
    NextShowsComponent,
    AboutUsComponent,
    ConcertDetailsComponent,
    ConcertsSiteComponent,
    ContactSiteComponent,
    ImprintComponent,
    LastShowsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    AngularEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
