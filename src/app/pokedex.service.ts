import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

 
@Injectable({
  providedIn: 'root'
})
export class PokedexService {

// declarando url con la api de los pokemones  
  urlPokejson:string ="https://pokeapi.co/api/v2";

  Pokemondata:any [] = [];

// verificando que se esté consumiendo bien el servidor 
  constructor(private http:HttpClient) { 
    console.log("Conección con la pokedex correcta");
  }

//leyendo data
  getPokemon (index:string) {
    return this.http.get<any>(`${this.urlPokejson}/pokemon/${index}`);  
  }
  
//filtrado para la búsqueda del pokemon
  getPoke(buscar:string) {
    return this.http.get<any>(`${this.urlPokejson}/pokemon/${buscar}`)
  }


}
