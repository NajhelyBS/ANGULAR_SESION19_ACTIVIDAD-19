import { Component } from '@angular/core';
import { PokedexService } from 'src/app/pokedex.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  //new array al que transferiremos los datos
  Listpokemon: any [] = [];


  constructor(private pokedex:PokedexService){}


  ngOnInit(): void {
    this.catchPokemon();
  }

  catchPokemon(){

    let valPokemon = {};

    for(let i = 1; i <= 150; i++) {
      this.pokedex.getPokemon(i).subscribe (
        res => {
          //getting the values of each pokemon
          valPokemon = {
            position: i,
            image:res.sprites.front_default, 
            name:res.name,
            order:res.order,
          };
          //transfiriendo valores al array Listpokemon
          this.Listpokemon.push(valPokemon);
          console.log(res);
        },

        error => {
          console.log(error);
        },

        //ordenar la posicion de los pokemones
          () => {
          this.Listpokemon.sort((primero, ultimo) => primero.position - ultimo.position);
          }
      );

    }
  }

  
  }


