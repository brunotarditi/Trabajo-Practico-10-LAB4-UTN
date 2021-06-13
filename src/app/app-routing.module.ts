import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './components/detalle/detalle.component';
import { DondeEstamosComponent } from './components/donde-estamos/donde-estamos.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './components/home/home.component';
import { ListaComponent } from './components/lista/lista.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dondeEstamos', component: DondeEstamosComponent},
  {path: 'productos', component: ProductoComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'formulario/:id', component: FormularioComponent},
  {path: 'lista', component: ListaComponent},
  {path: '**', redirectTo:'', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
