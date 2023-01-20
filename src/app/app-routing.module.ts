import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonViewComponent } from './web/pokemon-view/pokemon-view.component';
import { PokemonComponent } from './web/pokemon/pokemon.component';

const routes: Routes = [
  {path:"", component:PokemonComponent},
  {path:"informacion/:id", component:PokemonViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
