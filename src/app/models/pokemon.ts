import { Sprites } from "./sprites";
import { types } from "./types";

export class Pokemon{
    abilities!: [];
    base_experience!: number;
    forms!:[];
    game_indices!:[];
    height!:number;
    held_items!:[];
    id!:number;
    is_default!:boolean;
    location_area_encounters!:string;
    moves!:[];
    name!:string;
    order!:1;
    past_types!:[];
    species!:[];
    stats!:[];
    weight!:number;
    sprites!:Sprites;
    types!:types[];
}