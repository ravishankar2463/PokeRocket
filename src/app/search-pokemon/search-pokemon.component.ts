import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent implements OnInit {

  pokemon?:Pokemon;
  errorMessage?:string = "";
  pokemonSearchFrom!:FormGroup;

  constructor(private formBuilder:FormBuilder,private pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.pokemonSearchFrom=this.formBuilder.group({
      'pokemonName':['']
    })
  }

  getPokemon(): void{
    this.pokemon = undefined;
    this.errorMessage = undefined;
    let pokemonName : string = this.pokemonSearchFrom.value.pokemonName;
    this.pokemonService.fetchPokemonDataWithPokemonName(pokemonName.split(" ").join("-").toLowerCase()).subscribe(
      (      pokemon: Pokemon) => this.pokemon = pokemon,
      (      response: { error: string; }) => this.errorMessage = response.error
    );
  }

  getError(): string{
    if(this.errorMessage == "Not Found"){
      return "No Pokemon Exists with that name.";
    }else{
      if(this.errorMessage!= undefined){
        return this.errorMessage;
      }else{
        return "";
      }
    }
  }

}
