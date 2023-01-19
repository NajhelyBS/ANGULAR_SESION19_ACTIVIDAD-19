import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

 
@Injectable({
  providedIn: 'root'
})
export class PokedexService {

// declarando url con la api de los pokemones  
  urlPokejson ="https://pokeapi.co/api/v2";
  

// verificando que se esté consumiendo bien el servidor 
  constructor(private http:HttpClient) { 
    console.log("Conección con la pokedex correcta");
  }

//leyendo data
  getPokemon (index:number) {
    return this.http.get<any>(`${this.urlPokejson}/pokemon/${index}`);  
  }
  
}
