import { Component } from '@angular/core';


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



	loginRede() {
	}
}
