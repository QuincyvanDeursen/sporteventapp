import { Route } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { EventComponent } from './pages/event/event-columns.component';

export const appRoutes: Route[] = [
  { path: 'about', pathMatch: 'full', component: AboutComponent },
  { path: 'events', pathMatch: 'full', component: EventComponent },
];
