import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ValueProvider, LOCALE_ID, APP_INITIALIZER } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr);
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { MenuModule } from '@progress/kendo-angular-menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
//import { load, IntlModule } from '@progress/kendo-angular-intl';

// Load all required data for the pt locale
import '@progress/kendo-angular-intl/locales/pt/all';

//import { GridModule } from '@progress/kendo-angular-grid';
import { SharedModule } from './shared/shared.module';
//import * as likelySubtags from 'cldr-data/supplemental/likelySubtags.json';
//import * as weekData from 'cldr-data/supplemental/weekData.json';
//import * as currencyData from 'cldr-data/supplemental/currencyData.json';
//import * as numbers from 'cldr-data/main/pt/numbers.json';
//import * as timeZoneNames from 'cldr-data/main/pt/timeZoneNames.json';
//import * as calendar from 'cldr-data/main/pt/ca-gregorian.json';
//import * as currencies from 'cldr-data/main/pt/currencies.json';
//import * as dateFields from 'cldr-data/main/pt/dateFields.json';
import { HttpClientModule } from '@angular/common/http';

//load(likelySubtags, weekData, currencyData, numbers, currencies, calendar, dateFields, timeZoneNames);

//import { AccountService } from './login/account.service';
//import { ButtonsModule } from '@progress/kendo-angular-buttons';
//import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
//import { InputsModule } from '@progress/kendo-angular-inputs';
//import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
//import { LayoutModule } from '@progress/kendo-angular-layout';
//import { DialogsModule } from '@progress/kendo-angular-dialog';
//import { SortableModule } from '@progress/kendo-angular-sortable';
//import { AutoCompleteModule } from '@progress/kendo-angular-dropdowns';

import { AppConfig } from './app.config';
import { GridModule } from '@progress/kendo-angular-grid';
import { EditorModule } from '@progress/kendo-angular-editor';
import { TreeListModule } from '@progress/kendo-angular-treelist';
import { LayoutModule } from '@progress/kendo-angular-layout';

import "zone.js";


export function initializeApp(appConfig: AppConfig) {
	return () => appConfig;
}

//import { TooltipModule } from '@progress/kendo-angular-tooltip';


////import 'hammerjs';

///*NgRx*/



//import { LoginComponent } from './login/login.component';

//import { NotificationModule } from '@progress/kendo-angular-notification';
//import { LabelModule } from '@progress/kendo-angular-label';
//import { IndicatorsModule } from '@progress/kendo-angular-indicators';






@NgModule({
	declarations: [ AppComponent, HomeComponent, /*LoginComponent*/ ],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		//MenuModule,
		BrowserAnimationsModule,

		//GridModule,
		SharedModule.forRoot(),
    HttpClientModule,
		//IntlModule,
		//ButtonsModule,
		//DropDownsModule,
		//InputsModule,
		//DateInputsModule,
		//LayoutModule,
		//DialogsModule,
		//SortableModule,
		//TooltipModule,
		//AutoCompleteModule,
		//NotificationModule,
		//LabelModule,
		//IndicatorsModule,
		ReactiveFormsModule,
		GridModule,
		EditorModule,
		TreeListModule,
		LayoutModule,
    
	],
	providers: [
		AppConfig,
		{
			provide: APP_INITIALIZER,
			useFactory: initializeApp,
			deps: [ AppConfig ],
			multi: true
		},
		{
			provide: 'ApiEndpoint',
			useFactory: (endpoint: string) => AppConfig.settings.apiServer.ApiEndpoint,
			deps: [ AppConfig ]
		},
		//AccountService,
		{ provide: LOCALE_ID, useValue: 'pt-BR' },
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
