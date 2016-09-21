import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing.component';
import { WelcomeComponent } from '../../components/welcome/welcome.component';
import { EventListComponent } from '../../components/event/event-list.component';
import { EventCreateComponent } from '../../components/event/event-create.component';
import { EventDetailComponent } from '../../components/event/event-detail.component';

import { authRoutes } from '../../components/auth/auth.routing';

const landingRoutes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: '', component: WelcomeComponent },
      { path: 'eventos', component: EventListComponent },
      { path: 'eventos/crear', component: EventCreateComponent },
      { path: 'eventos/ver/:id', component: EventDetailComponent },
      ...authRoutes
    ]
  }
];

export const landingRouting: ModuleWithProviders = RouterModule.forChild(landingRoutes);