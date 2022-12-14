import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//shared
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
//about
import { AboutComponent } from './pages/about/about.component';
//events
import { EventColumnComponent } from './pages/event/event-columns/event-columns.component';
import { EventListComponent } from './pages/event/event-list/event-list.component';
import { EventCreateComponent } from './pages/event/event-create/event-create.component';
import { EventEditComponent } from './pages/event/event-edit/event-edit.component';
import { EventDetailComponent } from './pages/event/event-detail/event-detail.component';
import { SportclubColumnsComponent } from './pages/sportclub/sportclub-columns/sportclub-columns.component';
import { SportclubListComponent } from './pages/sportclub/sportclub-list/sportclub-list.component';
import { SportclubDetailComponent } from './pages/sportclub/sportclub-detail/sportclub-detail.component';
import { SportclubCreateComponent } from './pages/sportclub/sportclub-create/sportclub-create.component';
import { SportclubEditComponent } from './pages/sportclub/sportclub-edit/sportclub-edit.component';

//sportclubs

@NgModule({
  declarations: [
    AppComponent,
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
    SportclubDetailComponent,
    SportclubCreateComponent,
    SportclubEditComponent,
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
