import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon/pokemon.component';
import { FormsModule } from '@angular/forms';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    PokemonComponent,
    PokemonViewComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    FormsModule,
  ],
  exports: [
    PokemonComponent,
    PokemonViewComponent,
  ]
})
export class WebModule { }
