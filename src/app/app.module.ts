import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas


import { AppRoutingModule } from './app-routing.module';

//servicios



//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LangbarComponent } from './components/shared/langbar/langbar.component';
import { TitlebarComponent } from './components/shared/titlebar/titlebar.component';
import { LocacionesComponent } from './components/pages/locaciones/locaciones.component';
import { UlnoticiasComponent } from './components/ulnoticias/ulnoticias.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { AdmonUserComponent } from './components/pages/admon-user/admon-user.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ContactoComponent } from './components/pages/contacto/contacto.component';
import { ProveedoresComponent } from './components/pages/proveedores/proveedores.component';
import { BlogComponent } from './components/pages/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LangbarComponent,
    TitlebarComponent,
    LocacionesComponent,
    UlnoticiasComponent,
    CarruselComponent,
    AdmonUserComponent,
    LoginComponent,
    ContactoComponent,
    ProveedoresComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
