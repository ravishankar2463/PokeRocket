import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { data } from 'autoprefixer';
import { Pokemon } from '../models/pokemon';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemonUrl : string = "https://pokeapi.co/api/v2/pokemon/";
  pokemonBaseUrl:string = "https://pokeapi.co/api/v2/pokemon/?limit=9&offset=";

  constructor(private http:HttpClient) { }

  getPokemons(offset:number){
    let url = this.pokemonBaseUrl + offset
    return this.http.get<any>(url)
  }

  getPokemon(url:string):Observable<Pokemon>{
    return this.http.get<Pokemon>(url);
  }

  fetchPokemonDataWithPokemonName(pokemonName: string) : Observable<Pokemon>{
    return this.http.get<Pokemon>(this.pokemonUrl+pokemonName);
  }
}
