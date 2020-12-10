import { Component } from '@angular/core';
import { UserTokenService } from './shared/services/user.token.service';
import { AccountService } from './login/account.service';
import { AppInsightsService } from 'local/shared/applicationInsights/appinsights.service';
import { SpinnerService } from './shared/spinner/spinner';
import { LoginViewModel } from './viewmodels/login.viewmodel';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	title = 'app';
	public items: any[];
	public cssClassSideBar: string = 'sidebar left-sidebar';
  public login: boolean = false;

	constructor(
		private _accountService: AccountService,
		private _userTokenService: UserTokenService,
		private _appInsightsService: AppInsightsService,
		private _spinnerService: SpinnerService
	) {
		this.items = this.mapItems();
	}

	public NomeUser: string;
	ngOnInit() {
		
	}

	private getToken() {

	}

	private mapItems(): any[] {
    return [];
	}

	showSideBar() {

	}

	loginEvent(e: LoginViewModel) {
	
	}

	loginRede() {
	}
}
