import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { ViewPokemonsComponent } from './view-pokemons/view-pokemons.component';

const routes: Routes = [
  {path:'seeAllPokemons',component:ViewPokemonsComponent},
  {path:'landing',component:LandingComponent},
  {path:'searchPokemon',component:SearchPokemonComponent},
  {path:'',redirectTo:'landing',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
