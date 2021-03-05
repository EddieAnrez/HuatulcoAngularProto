import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from '../app/components/pages/home/home.component';
import { LocacionesComponent } from '../app/components/pages/locaciones/locaciones.component';
import { LoginComponent } from '../app/components/pages/login/login.component';
import { AdmonUserComponent } from '../app/components/pages/admon-user/admon-user.component';
import { ContactoComponent } from '../app/components/pages/contacto/contacto.component';
import { ProveedoresComponent } from '../app/components/pages/proveedores/proveedores.component';
import { BlogComponent } from '../app/components/pages/blog/blog.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'locaciones', component: LocacionesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admonuser', component: AdmonUserComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'blog', component: BlogComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
