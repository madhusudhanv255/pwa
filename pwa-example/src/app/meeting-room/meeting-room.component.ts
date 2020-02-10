import { Component, OnInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BookRoomModalComponent } from './book-room-modal/book-room-modal.component';

import interactionPlugin from '@fullcalendar/interaction';


@Component({
    selector: 'app-meeting-room',
    templateUrl: './meeting-room.component.html',
    styleUrls: ['./meeting-room.component.css']
})

export class MeetingRoomComponent implements OnInit {
    public calendarPlugins: any;
    closeResult: any;
    constructor() {

        this.calendarPlugins = [dayGridPlugin, interactionPlugin];
    }

    ngOnInit() {
    }

    handleDateClick(arg) {
        //this.open();
    }

    /*  open() {
         this.modalService.open(BookRoomModalComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
             this.closeResult = `Closed with: ${result}`;
         }, (reason) => {
             this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
         });
     }
     private getDismissReason(reason: any): string {
         if (reason === ModalDismissReasons.ESC) {
             return 'by pressing ESC';
         } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
             return 'by clicking on a backdrop';
         } else {
             return `with: ${reason}`;
         }
     } */

}
