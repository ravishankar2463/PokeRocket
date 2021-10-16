import { Component, OnInit } from '@angular/core';
import { data } from 'autoprefixer';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-view-pokemons',
  templateUrl: './view-pokemons.component.html',
  styleUrls: ['./view-pokemons.component.css']
})
export class ViewPokemonsComponent implements OnInit {

  list: Pokemon[] = [];

  pokemonList : Pokemon[] = [];

  currentPage!:number;
  prevButtonDisabled:boolean=true;

  offset:number = 9;

  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.currentPage = Number(localStorage.getItem('currentPageNo')); 
    this.fetchPokemons(this.currentPage*this.offset);
    if(this.currentPage > 0){
      this.prevButtonDisabled = false;
    }
  }

  fetchPokemons(offset:number=0){
    this.pokemonService.getPokemons(offset).subscribe(
      (data) => {
        this.updatelist(data["results"])
      }
    )
  }

  updatelist(data:[]){
    this.list = [];
    
    data.forEach(
      (e) => {
        this.pokemonService.getPokemon(e["url"]).subscribe((data) => 
        {
          this.list.push(data); 
          this.sortPokemons();
          this.updatePokemonList();
        })
      }
    )
  }

  updatePokemonList(){
    this.pokemonList = this.list
  }

  sortPokemons(){
    this.list = this.list.sort((a, b) => {
      return a.id - b.id;
    });

    this.updatePokemonList();
  }

  nextPokemons(){
    this.currentPage = this.currentPage + 1;
    localStorage.setItem('currentPageNo',this.currentPage.toString());
    if(this.currentPage != 0){
      this.prevButtonDisabled = false;
    }
    this.fetchPokemons(this.currentPage*this.offset)
  }

  prevPokemons(){
    this.currentPage = this.currentPage - 1;
    localStorage.setItem('currentPageNo',this.currentPage.toString());
    if(this.currentPage != 0){
      this.prevButtonDisabled = false;
    }else{
      this.prevButtonDisabled = true;
    }
    this.fetchPokemons(this.currentPage*this.offset)
  }

}
