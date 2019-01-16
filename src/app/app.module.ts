import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { MobileService } from "./services/mobile.service";
import { TopImgComponent } from "./components/top-img/top-img.component";
import { TextComponent } from "./components/text/text.component";
import { FootComponent } from "./components/foot/foot.component";
import { HomeComponent } from "./views/home/home.component";
import { UndergroundRemainsComponent } from "./views/underground-remains/underground-remains.component";
import { GoehcComponent } from "./views/goehc/goehc.component";
import { ImpressumComponent } from "./views/impressum/impressum.component";
import { ChamaeleonComponent } from "./views/chamaeleon/chamaeleon.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TopImgComponent,
    TextComponent,
    FootComponent,
    HomeComponent,
    UndergroundRemainsComponent,
    GoehcComponent,
    ImpressumComponent,
    ChamaeleonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [MobileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
