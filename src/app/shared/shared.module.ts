import { NgModule, ModuleWithProviders, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { HttpClientModule } from '@angular/common/http';

import { ExceptionService } from './services/exception.service';
//import { HttpService } from './services/http.service';


import { CanDeactivateGuard } from './services/router/can.deactivate.guard.service';
import { GridButtonService } from './services/gridbutton.service';
import { LOGGING_ERROR_HANDLER_PROVIDERS } from './services/error.handler';


import { GridFilterService } from './services/gridfilter.service';
import { FilterService } from './services/filter.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



import { GridManagerComponent } from 'local/shared/grid.manager/grid.manager';



import { FormlyKendoModule } from '../../agl-kendo/src/public-api';
import { GridModule } from '@progress/kendo-angular-grid';
import { FormlyModule } from '@ngx-formly/core';


@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		GridModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyKendoModule
		// adicionar modulos que esse modulo utilizar
	],
	declarations: [

		

		// adicionar componentes que esse modulo utilizar
	],
	exports: [
		CommonModule,
		ReactiveFormsModule,
    FormsModule,
    FormlyModule,
    GridModule,

    FormlyKendoModule
		// adicionar componentes que esse modulo exportar
	],
	providers: []
})
export class SharedModule {
	static forRoot(): ModuleWithProviders<SharedModule> {
		return {
			ngModule: SharedModule,
			providers: [

				ExceptionService,

				GridButtonService,

				
				CanDeactivateGuard,

				{ provide: LOCALE_ID, useValue: 'pt-BR' },
				FilterService,
				GridFilterService,
				GridManagerComponent,
				LOGGING_ERROR_HANDLER_PROVIDERS,
			]
		};
	}
}
