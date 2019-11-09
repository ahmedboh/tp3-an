import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableauComponent } from './tableau/tableau.component';
import { ProfilComponent } from './profil/profil.component';
import { FormsModule }  from '@angular/forms';
import { OrientationComponent } from './orientation/orientation.component';
import { SaisonComponent } from './saison/saison.component';
import { ColoriageComponent } from './coloriage/coloriage.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { StyleClassComponent } from './style-class/style-class.component';
import { EmployeComponent } from './employe/employe.component';
import { NomPersoPipe } from './nom-perso.pipe';
@NgModule({
  declarations: [
    AppComponent,
    TableauComponent,
    ProfilComponent,
    OrientationComponent,
    SaisonComponent,
    ColoriageComponent,
    EtudiantsComponent,
    StyleClassComponent,
    EmployeComponent,
    NomPersoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
