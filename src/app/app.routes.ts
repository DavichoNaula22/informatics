import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AprendizajeComponent } from './aprendizaje/aprendizaje.component';
import { ExtrasComponent } from './extras/extras.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'aprendizaje', component: AprendizajeComponent },
  { path: 'extras', component: ExtrasComponent },
  { path: '**', redirectTo: 'inicio' }
];
