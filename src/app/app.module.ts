import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { AttributesComponent } from './attributes/attributes.component';
import { TribesDetailComponent } from './tribes-detail/tribes-detail.component';
import { D10systemComponent } from './d10system/d10system.component';
import { GiftsComponent } from './gifts/gifts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SettingComponent } from './setting/setting.component';
import { AppRoutingModule } from './/app-routing.module';
import { ChartsComponent } from './combat/charts/charts.component';
import { HealthComponent } from './combat/health/health.component';
import { ManeuversComponent } from './combat/maneuvers/maneuvers.component';
import { StagesComponent } from './combat/stages/stages.component';
import { TypesComponent } from './combat/types/types.component';
import { RageComponent } from './traits/rage/rage.component';
import { GnosisComponent } from './traits/gnosis/gnosis.component';
import { WillpowerComponent } from './traits/willpower/willpower.component';
import { RenownComponent } from './traits/renown/renown.component';
import { BreedsComponent } from './breeds/breeds.component';
import { AuspicesComponent } from './auspices/auspices.component';
import { CharacterCreationComponent } from './character-creation/character-creation.component';
import { TribesComponent } from './tribes/tribes.component';
import { GiftsDetailComponent } from './gifts-detail/gifts-detail.component';
import { SearchPipe } from './search.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AbilitiesComponent,
    AttributesComponent,
    TribesDetailComponent,
    D10systemComponent,
    GiftsComponent,
    NavbarComponent,
    SettingComponent,
    ChartsComponent,
    HealthComponent,
    ManeuversComponent,
    StagesComponent,
    TypesComponent,
    RageComponent,
    GnosisComponent,
    WillpowerComponent,
    RenownComponent,
    BreedsComponent,
    AuspicesComponent,
    CharacterCreationComponent,
    TribesComponent,
    GiftsDetailComponent,
    SearchPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
