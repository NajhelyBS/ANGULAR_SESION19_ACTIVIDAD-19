import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

 
@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  urlPokejson ="https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";
  
  constructor(private http:HttpClient) { 
    console.log("Conección con la pokedex correcta");
  }
}
