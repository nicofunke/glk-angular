import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { MobileService } from "./services/mobile.service";
import { TopImgComponent } from "./components/top-img/top-img.component";
import { TextComponent } from './components/text/text.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TopImgComponent,
    TextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MobileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
