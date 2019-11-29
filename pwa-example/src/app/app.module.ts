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

@NgModule({
    entryComponents: [BookRoomModalComponent],
    declarations: [
        AppComponent,
        MeetingRoomComponent,
        BookRoomModalComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FullCalendarModule,
        NgbModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
