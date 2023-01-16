import { Component } from '@angular/core';
import { PokedexService } from 'src/app/pokedex.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {

  public pokemons:any = [];

  constructor(private pokedex:PokedexService){
    
  }

}
