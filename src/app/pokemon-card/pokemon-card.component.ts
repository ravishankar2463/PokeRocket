import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { Type } from '../models/type';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon!:Pokemon;

  imageUrl:string = "";
  typeList:string[] = [];
  baseType:string = "";
  textColor:string = "";
  linkColor:String = "";

  constructor() { }

  ngOnInit(): void {
    this.setImgUrl()
    this.getPokemonTypes()
  }

  setImgUrl(){
    this.imageUrl = this.pokemon.sprites.front_default
  }

  getPokemonTypes(){
    this.pokemon.types.forEach(
      (element) => {
        let type:string = element.type.name;
        this.typeList.push(type);
        this.getBaseType();
        this.setTextColor();
      }
    )
  }

  getBaseType(){
    this.baseType = this.typeList[0]+"-bg"
  }

  setTextColor(){
    if(this.typeList[0] == "grass" || this.typeList[0] == "normal" || this.typeList[0] == "electric" || this.typeList[0] == "fairy"){
      this.textColor = "text-gray-500";
      this.linkColor = "text-blue-500 hover:text-blue-400";
    }else{
      this.textColor = "text-white";
      this.linkColor = "text-blue-500 hover:text-blue-400";
    }
  }

}
