import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

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
    TypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
