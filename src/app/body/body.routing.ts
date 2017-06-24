import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from "app/body/main/main.component";

const routes: Routes = [
  { path: '', component: MainComponent }
];

export const BodyRouting: ModuleWithProviders = RouterModule.forChild(routes);