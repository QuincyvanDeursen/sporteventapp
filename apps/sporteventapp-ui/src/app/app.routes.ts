import { Route } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { EventColumnComponent } from './pages/event/event-columns.component';
import { EventCreateComponent } from './pages/event/event-create/event-create.component';
import { EventDetailComponent } from './pages/event/event-detail/event-detail.component';
import { EventEditComponent } from './pages/event/event-edit/event-edit.component';

export const appRoutes: Route[] = [
  //about
  { path: 'about', pathMatch: 'full', component: AboutComponent },

  //events
  { path: 'events/new', component: EventCreateComponent },
  { path: 'events/:id/edit', component: EventEditComponent },
  {
    path: 'events',
    component: EventColumnComponent,
    children: [
      { path: ':id', pathMatch: 'full', component: EventDetailComponent },
    ],
  },
];
