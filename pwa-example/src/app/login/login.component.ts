import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AppRestEndPoint } from '../app-restEndPoint';
import { Router } from '@angular/router';
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login-v2';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	email: string;
	password: string;
	constructor(private apiService: ApiService,
		private router: Router,
		private socialAuthService: AuthService) {

	}

	public socialSignIn(socialPlatform: string) {
		let socialPlatformProvider;
		if (socialPlatform == "google") {
			socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
		}
		this.socialAuthService.signIn(socialPlatformProvider).then(
			(userData) => {
				console.log(socialPlatform + " sign in data : ", userData);
				// Now sign-in with userData
				this.submitLogin(userData);

			}
		);
	}




	ngOnInit() { }

	submitLogin(user) {
		const loginValues = {
			"empEmail": user.email
		};

		/* this.apiService.postCall(AppRestEndPoint.SIGN_IN, loginValues).subscribe(data => {
			if (data.access_token) {
				this.router.navigate(['meeting']);
			}
		}); */

		this.apiService.postCall(AppRestEndPoint.SIGN_IN, loginValues).subscribe(data => {
			if (data.token) {
				this.router.navigate(['meeting']);
			}
		},
			err => { console.log(err.message) })


	}

}
