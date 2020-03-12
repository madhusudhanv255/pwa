import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MeetingService } from 'src/app/meeting.service';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
@Component({
    selector: 'app-book-room-modal',
    templateUrl: './book-room-modal.component.html',
    styleUrls: ['./book-room-modal.component.css']
})

export class BookRoomModalComponent implements OnInit {
    calendarPlugins: any;
    eventSource:Array<any>=[];
    dropDownValues:Array<any>=[];
    calendarOptions: any;
    counter = 1;
    meetingLocation:any;
    meetingRooms:Array<any>=[];
    public model: any;

    @ViewChild('calendar', { static: false }) calendarComponent: FullCalendarComponent;

    calendarEvents = [
        { title: 'event 1', date: '2019-04-01' }
    ];
    search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

    constructor(public activeModal: NgbActiveModal,private meetingService:MeetingService) {
      
        this.calendarPlugins = [timeGridPlugin, listPlugin, interactionPlugin];
        // this.eventSource = [{
        //     title: 'event3',
        //     start: '2019-11-28T12:30:00',
        //     end: '2019-11-28T1:00:00',
        //     allDay: false,
        //     backgroundColor: '#1876d2',
        //     textColor: 'white',
        //     editable: false

        // }];
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
        this.getDropDownValues();
        this.getRoomMeetings();

    }

    getRoomMeetings(){
        var meetings=[];
        this.meetingService.getCall('https://immense-escarpment-67247.herokuapp.com/api/v1/meetings.json').subscribe((result) => {
            // This code will be executed when the HTTP call returns successfully 
            meetings=this.meetingService.formatMeetings(result.meetings.array);
            this.eventSource=meetings;
        });
        
    }
    getDropDownValues(){
        var meetings=[];
        this.meetingService.getCall('https://immense-escarpment-67247.herokuapp.com/api/v1/meetings/dropdown_values.json?access_token=0AO99n6xSBqoGx_7q4PGe4sD1-cdWrGvtOKBiYRBZmw').subscribe((result) => {
            // This code will be executed when the HTTP call returns successfully 
           // meetings=this.meetingService.formatMeetings(result.meetings.array);
           this.dropDownValues=result.locations.array;
           console.log(this.dropDownValues);
        });
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
    selectLocation(){
       let meetingLocation=this.dropDownValues.filter(x => x.id == this.meetingLocation);
       this.meetingRooms=meetingLocation[0].rooms.array ;
    }
    bookMeetingRoom(){
        var meetings=[];
        var reqObj={
            "meeting":
            {
              "description": "nikitha.rokhade@accionlabs.com",
              "room_id": 1,
              "start_time": "2020-03-09T14:27:42",
              "end_time": "2020-03-09T15:27:42"
            },
            "users":
            {
            "attendees":
            [
              {"id":"37"},
              {
              "department": "Development",
              "role": "Developer",
              "emp_id": "1123",
              "first_name": "prabu",
              "last_name": "Gnanasekar",
              "project": "Owl",
              "email": "madhu@accionlabs.com"
            },
              {
              "department": "Development",
              "role": "Developer",
              "emp_id": "2012",
              "first_name": "prabu",
              "last_name": "Gnanasekar",
              "project": "Owl",
              "email": "nikitha@accionlabs.com"
            }
            ]
          }
          }
        this.meetingService.postCall('https://immense-escarpment-67247.herokuapp.com/api/v1/meetings.json?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbXBsb3llZUlEIjoiMTEzNCIsImlhdCI6MTU4MzgxNjYwMn0.JvC17GerP1jtfspV1krvml2idY4cIg83_SbSkTqqSrI',reqObj).subscribe((result) => {
            // This code will be executed when the HTTP call returns successfully 
           // meetings=this.meetingService.formatMeetings(result.meetings.array);
           this.dropDownValues=result.locations.array;
           console.log(this.dropDownValues);
        });
    }
    ngOnInit() {
    }

}
