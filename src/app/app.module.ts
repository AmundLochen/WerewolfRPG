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
    SettingComponent
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
