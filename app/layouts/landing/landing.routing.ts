import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing.component';
import { WelcomeComponent } from '../../components/welcome/welcome.component';
import { EventListComponent } from '../../components/event/event-list.component';
import { EventCreateComponent } from '../../components/event/event-create.component';
import { LoginComponent } from '../../components/auth/login.component';
import { RegisterComponent } from '../../components/auth/register/register.component';

const landingRoutes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: '', component: WelcomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'registrate', component: RegisterComponent },
      { path: 'eventos', component: EventListComponent },
      { path: 'eventos/crear', component: EventCreateComponent }
    ]
  }
];

export const landingRouting: ModuleWithProviders = RouterModule.forChild(landingRoutes);