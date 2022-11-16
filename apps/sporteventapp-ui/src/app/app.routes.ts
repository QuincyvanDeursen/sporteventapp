import { Route } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';

export const appRoutes: Route[] = [
  { path: 'about', pathMatch: 'full', component: AboutComponent },
];
