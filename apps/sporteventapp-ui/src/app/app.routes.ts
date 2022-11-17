import { Route } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { EventColumnComponent } from './pages/event/event-columns.component';
import { EventDetailComponent } from './pages/event/event-detail/event-detail.component';

export const appRoutes: Route[] = [
  { path: 'about', pathMatch: 'full', component: AboutComponent },
  {
    path: 'events',
    component: EventColumnComponent,
    children: [{ path: ':id', component: EventDetailComponent }],
  },
];
