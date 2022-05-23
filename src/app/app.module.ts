import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { FavouriteButtonDirective } from './favourites-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    FavouritesComponent,
    FavouriteButtonDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
