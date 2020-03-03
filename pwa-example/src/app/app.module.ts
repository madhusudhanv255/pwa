import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MeetingRoomComponent } from './meeting-room/meeting-room.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { BookRoomModalComponent } from './meeting-room/book-room-modal/book-room-modal.component'; // for FullCalendar!
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
    entryComponents: [BookRoomModalComponent],
    declarations: [
        AppComponent,
        MeetingRoomComponent,
        BookRoomModalComponent,
        LoginComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FullCalendarModule,
        HttpClientModule,
        NgbModule,
        FormsModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
