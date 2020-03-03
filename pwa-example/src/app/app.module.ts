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
import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider
} from "angular-6-social-login-v2";

@NgModule({
    entryComponents: [BookRoomModalComponent],
    declarations: [
        AppComponent,
        MeetingRoomComponent,
        BookRoomModalComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FullCalendarModule,
        HttpClientModule,
        NgbModule,
        FormsModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        BrowserAnimationsModule,
        SocialLoginModule
    ],

    providers: [{
        provide: AuthServiceConfig,
        useFactory: getAuthServiceConfigs
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }

//Config for the authentication
export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig(

        [
            {
                id: GoogleLoginProvider.PROVIDER_ID,
                provider: new GoogleLoginProvider("62003512755-lmipn02dban6phfv4gf1d0k9dbfgok6v.apps.googleusercontent.com")
            }
        ]


    );
    return config;
}
