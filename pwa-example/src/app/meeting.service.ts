import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, finalize } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
const httpOptions = {
	 headers: new HttpHeaders({
		'Accept': 'application/json',
		'Content-Type': 'application/json; charset=UTF-8',
		'If-Modified-Since': 'Mon, 26 Jul 1997 05:00:00 GMT',
		'Cache-Control': 'no-cache',
		'Pragma': 'no-cache'
})
};
@Injectable({
	providedIn: 'root'
})

export class MeetingService {

	constructor( private http: HttpClient) { }
	getCall(url):Observable<any>  {
		return this.http.get(url,httpOptions)
		.pipe(map((response : Response) => {
				return response;   
		}), catchError((error: Response) =>{
			 
				return throwError('Something went wrong');      
		}), finalize(() => {
			 // this.loadingPanelService.isLoading = false;
		}));
    }
    
    public postCall(url, data): Observable<any> {
        return this.http.post(url, data, httpOptions)
            .pipe(map((response: any) => {
                return response;
            }));
    }
    
    
	private handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
	
			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead
	
			// TODO: better job of transforming error for user consumption
		console.log(`${operation} failed: ${error.message}`);
	
			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}
	formatMeetings(meetingArray){
		var meetings=[];
		meetingArray.forEach(element => {
				meetings.push({'title':element.description,'start':'2020-02-18','all_day':true,'end':element.end_time,'attendees':element.attendees,'room':element.room,'organizer':element.organizer});
		});
		return meetings;
	}

	
}
