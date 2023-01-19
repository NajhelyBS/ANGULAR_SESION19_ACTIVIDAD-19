import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon/pokemon.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    PokemonComponent,
  ]
})
export class WebModule { }
