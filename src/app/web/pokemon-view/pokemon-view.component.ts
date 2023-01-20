import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from 'src/app/pokedex.service';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.css']
})
export class PokemonViewComponent implements OnInit{

  public dataPokemon:any =[];  

constructor(private pokedex:PokedexService, private route:ActivatedRoute) {}


ngOnInit(): void {
 
}

}


