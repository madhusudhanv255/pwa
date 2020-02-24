import { Component, OnInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BookRoomModalComponent } from './book-room-modal/book-room-modal.component';

import interactionPlugin from '@fullcalendar/interaction';
import { MeetingService } from '../meeting.service';


@Component({
    selector: 'app-meeting-room',
    templateUrl: './meeting-room.component.html',
    styleUrls: ['./meeting-room.component.css']
})

export class MeetingRoomComponent implements OnInit {
    public calendarPlugins: any;
    closeResult: any;
    meetingSource:Array<any>=[];
    constructor(private meetingService: MeetingService,private modalService:NgbModal) {
        this.getMeetings();
        this.calendarPlugins = [dayGridPlugin, interactionPlugin];
    }

    ngOnInit() {
    }

    handleDateClick(arg) {
        this.open();
    }

    getMeetings(){
        var meetings=[];
        this.meetingService.getCall('https://immense-escarpment-67247.herokuapp.com/api/v1/meetings.json').subscribe((result) => {
            // This code will be executed when the HTTP call returns successfully 
            meetings=this.meetingService.formatMeetings(result.meetings.array);
            this.meetingSource=meetings;
            
        });
    }
    
      open() {
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
     } 

}
