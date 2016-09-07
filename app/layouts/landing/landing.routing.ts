import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing.component';
import { WelcomeComponent } from '../../components/welcome/welcome.component';
import { EventListComponent } from '../../components/event/event-list.component';

const landingRoutes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: '', component: WelcomeComponent },
      { path: 'eventos', component: EventListComponent }
    ]
  }
];

export const landingRouting: ModuleWithProviders = RouterModule.forChild(landingRoutes);