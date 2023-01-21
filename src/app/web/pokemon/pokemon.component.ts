import { Component } from '@angular/core';
import { PokedexService } from 'src/app/pokedex.service';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  //new array al que transferiremos los datos
  Listpokemon: any [] = [];
  searchValue = '';

  constructor(private pokedex:PokedexService, private ruta:Router, router:ActivatedRoute){}

  ngOnInit(): void {
    this.catchPokemon();
  }

  catchPokemon(){

    let valPokemon = {};

    //reptiendo el proceso para cada id
    for(let i = 1; i <= 150; i++) {
      this.pokedex.getPokemon(String(i)).subscribe (
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
          this.Listpokemon.sort((primero, ultimo) => primero.position - ultimo.position);}
      );}
  
    }

  

    Filtrar(buscar:any){
      this.ruta.navigate(['/catchpokemon',String(buscar).toLocaleLowerCase()]);
    }
  }


