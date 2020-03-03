import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AppRestEndPoint } from '../app-restEndPoint';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	email: string;
	password: string;
	constructor(private apiService: ApiService,
		private router: Router) {

	}

	ngOnInit() { }

	submitLogin() {
		const loginValues = {
			user: {
				email: this.email,
				password: this.password
			}
		};

		this.apiService.postCall(AppRestEndPoint.SIGN_IN, loginValues).subscribe(data => {
			if (data.access_token) {
				this.router.navigate(['meeting']);
			}
		});


	}

}
