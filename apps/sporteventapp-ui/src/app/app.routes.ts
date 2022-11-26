import { Route } from '@angular/router';
//about
import { AboutComponent } from './pages/about/about.component';
//event
import { EventColumnComponent } from './pages/event/event-columns/event-columns.component';
import { EventCreateComponent } from './pages/event/event-create/event-create.component';
import { EventDetailComponent } from './pages/event/event-detail/event-detail.component';
import { EventEditComponent } from './pages/event/event-edit/event-edit.component';
//sportclub
import { SportclubColumnsComponent } from './pages/sportclub/sportclub-columns/sportclub-columns.component';
import { SportclubCreateComponent } from './pages/sportclub/sportclub-create/sportclub-create.component';
import { SportclubDetailComponent } from './pages/sportclub/sportclub-detail/sportclub-detail.component';
import { SportclubEditComponent } from './pages/sportclub/sportclub-edit/sportclub-edit.component';

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

  //sportclubs
  { path: 'sportclubs/new', component: SportclubCreateComponent },
  { path: 'sportclubs/:id/edit', component: SportclubEditComponent },
  {
    path: 'sportclubs',
    component: SportclubColumnsComponent,
    children: [
      { path: ':id', pathMatch: 'full', component: SportclubDetailComponent },
    ],
  },
];
