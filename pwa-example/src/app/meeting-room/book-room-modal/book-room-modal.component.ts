import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';

@Component({
    selector: 'app-book-room-modal',
    templateUrl: './book-room-modal.component.html',
    styleUrls: ['./book-room-modal.component.css']
})
export class BookRoomModalComponent implements OnInit {
    calendarPlugins: any;
    eventSource: any;
    calendarOptions: any;
    counter = 1;
    @ViewChild('calendar', { static: false }) calendarComponent: FullCalendarComponent;

    calendarEvents = [
        { title: 'event 1', date: '2019-04-01' }
    ];


    constructor() {

        this.calendarPlugins = [timeGridPlugin, listPlugin, interactionPlugin];
        this.eventSource = [{
            title: 'event3',
            start: '2019-11-28T12:30:00',
            end: '2019-11-28T1:00:00',
            allDay: false,
            backgroundColor: '#1876d2',
            textColor: 'white',
            editable: false

        }];
        this.calendarOptions = {
            editable: true,
            eventLimit: false,
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'listDay'
            },
            selectable: true,
            events: [],
        };

    }
    handleDateClick(event) {

        if (this.counter != 1) {
            this.eventSource.pop();
        }
        //  if (confirm('Would you like to add an event  ?')) {
        this.eventSource = this.eventSource.concat({
            title: 'New Event',
            start: event.date,
            allDay: event.allDay,
            backgroundColor: '#1876d2',
            textColor: 'white',
            editable: false
        });

        this.counter = 2;


    }
    ngOnInit() {
    }

}
