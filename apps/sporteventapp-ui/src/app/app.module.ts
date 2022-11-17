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
import { EventComponent } from './pages/event/event-columns.component';
import { EventListComponent } from './pages/event/event-list/event-list.component';
import { EventCreateComponent } from './pages/event/event-create/event-create.component';
import { EventEditComponent } from './pages/event/event-edit/event-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    EventComponent,
    EventListComponent,
    EventCreateComponent,
    EventEditComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
