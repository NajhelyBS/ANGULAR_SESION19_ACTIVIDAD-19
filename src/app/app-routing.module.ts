import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonViewComponent } from './web/pokemon-view/pokemon-view.component';
import { PokemonComponent } from './web/pokemon/pokemon.component';

const routes: Routes = [
  {path:"", component:PokemonComponent},
  {path:"catchpokemon/:id", component:PokemonViewComponent},
  {path:"**", redirectTo:"", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
