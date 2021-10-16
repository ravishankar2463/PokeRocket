import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPokemonsComponent } from './view-pokemons/view-pokemons.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { LandingComponent } from './landing/landing.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewPokemonsComponent,
    PokemonCardComponent,
    LandingComponent,
    SearchPokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
