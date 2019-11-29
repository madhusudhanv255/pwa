import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeetingRoomComponent } from './meeting-room/meeting-room.component';


const routes: Routes = [
    {
        path: 'meeting',
        component: MeetingRoomComponent,

    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
