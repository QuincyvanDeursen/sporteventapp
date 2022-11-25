import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//shared
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
//about
import { AboutComponent } from './pages/about/about.component';
//events
import { EventColumnComponent } from './pages/event/event-columns.component';
import { EventListComponent } from './pages/event/event-list/event-list.component';
import { EventCreateComponent } from './pages/event/event-create/event-create.component';
import { EventEditComponent } from './pages/event/event-edit/event-edit.component';
import { EventDetailComponent } from './pages/event/event-detail/event-detail.component';
import { SportclubColumnsComponent } from './pages/sportclub-columns/sportclub-columns.component';
import { SportclubListComponent } from './pages/sportclub-list/sportclub-list/sportclub-list.component';

//sportclubs

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    EventColumnComponent,
    EventListComponent,
    EventCreateComponent,
    EventEditComponent,
    EventDetailComponent,
    SportclubColumnsComponent,
    SportclubListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
