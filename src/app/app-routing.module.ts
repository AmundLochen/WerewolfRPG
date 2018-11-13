import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TribesDetailComponent } from './tribes-detail/tribes-detail.component';
import { AttributesComponent } from './attributes/attributes.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { D10systemComponent } from './d10system/d10system.component';
import { GiftsComponent } from './gifts/gifts.component';
import { SettingComponent } from './setting/setting.component';
import { TypesComponent } from './combat/types/types.component';
import { StagesComponent } from './combat/stages/stages.component';
import { ManeuversComponent } from './combat/maneuvers/maneuvers.component';
import { ChartsComponent } from './combat/charts/charts.component';
import { HealthComponent } from './combat/health/health.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: "home", component: DashboardComponent },
  { path: 'd10system', component: D10systemComponent },
  { path: 'gifts', component: GiftsComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'tribes/:id', component: TribesDetailComponent },
  { path: 'attributes/:id', component: AttributesComponent },
  { path: 'abilities/:type', component: AbilitiesComponent },
  { path: 'abilities/:type/:id', component: AbilitiesComponent },
  { path: 'combat/types', component: TypesComponent },
  { path: 'combat/stages', component: StagesComponent },
  { path: 'combat/maneuvers', component: ManeuversComponent },
  { path: 'combat/charts', component: ChartsComponent },
  { path: 'combat/health', component: HealthComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }