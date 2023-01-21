import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from 'src/app/pokedex.service';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.css']
})
export class PokemonViewComponent implements OnInit{

constructor(private pokedex:PokedexService, private route:ActivatedRoute) {}

public dataPokemon:any =[];  
response = '';

ngOnInit(): void {
 
  const id = this.route.snapshot.paramMap.get('id');
  this.getDataPokemon(id); 

}


getDataPokemon(id:any){
  this.pokedex.getPoke(id).subscribe(
      res => {
        this.dataPokemon = {
          id: res.id,
          nombre: res.name,
          type: res.types[0].type.name,
          image2: res.sprites.other.home.front_default,
          habilidad: res.abilities[0].ability.name,
          altura: res.height,
          peso: res.weight,
          frente: res.sprites.front_default,
          espalda:  res.sprites.back_default,
        };
        this.response = res;
      },
      error => { 
        console.log(error);
        this.response = 'No se encontraron datos';
      });
}


}