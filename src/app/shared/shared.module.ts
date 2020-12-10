import { NgModule, ModuleWithProviders, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { HttpClientModule } from '@angular/common/http';

import { ExceptionService } from './services/exception.service';
//import { HttpService } from './services/http.service';

import { UserTokenService } from './services/user.token.service';
import { UserPermissionService } from './services/user.permission.service';
import { CanDeactivateGuard } from './services/router/can.deactivate.guard.service';
import { GridButtonService } from './services/gridbutton.service';
import { LOGGING_ERROR_HANDLER_PROVIDERS } from './services/error.handler';
import { LoggedInGuardService, MenuPermissionGuardService } from './services/router/activate.guard.service';

import { GridFilterService } from './services/gridfilter.service';
import { FilterService } from './services/filter.service';
import { HttpSpinnerInterceptor } from './services/http.spinner.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './services/http.error.interceptor';
import { SpinnerService, SpinnerComponent } from './spinner/spinner';

import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { AutoCompleteModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { MessageService } from './services/message.service';
import { ToastComponent, ToastService } from './toast/toast';
import { ErrorMessageComponent } from './error.message/error.message.component';
import { DialogService } from './services/dialog.service';
import { HttpDefaultParametersInterceptor } from './services/http.defaultparameters.interceptor';
import { CultureService } from './services/culture.service';
import { MenuLateralComponent, MenuLateralService } from './menu/menu';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { EnumDisplayComponent } from 'local/shared/enum.display/enum.display.component';
import { GridManagerComponent } from 'local/shared/grid.manager/grid.manager';
import { UploadModule } from '@progress/kendo-angular-upload';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { load, IntlModule, CldrIntlService } from '@progress/kendo-angular-intl';
import * as likelySubtags from 'cldr-data/supplemental/likelySubtags.json';
import * as weekData from 'cldr-data/supplemental/weekData.json';
import * as currencyData from 'cldr-data/supplemental/currencyData.json';
import * as numbers from 'cldr-data/main/pt/numbers.json';
import * as timeZoneNames from 'cldr-data/main/pt/timeZoneNames.json';
import * as calendar from 'cldr-data/main/pt/ca-gregorian.json';
import * as currencies from 'cldr-data/main/pt/currencies.json';
import * as dateFields from 'cldr-data/main/pt/dateFields.json';
import { ClassDisplayComponent } from 'local/shared/class.display/class.display.component';
import { RadioYesNoComponent } from 'local/shared/group.radio.yes.no/group.radion.component';
import { CpfPipe } from 'local/shared/pipes/CpfCnpj';
import { FormatoComponent } from 'local/shared/formatoexibicao/formato.component';
import { BlockCopyPasteDirective } from 'local/shared/directive/blockcopypaste.directive';
import { TextoBooleanPipe } from 'local/shared/pipes/textoboolean.pipe';
import { PermissionsFromApiGuardService } from './services/router/activatefromapi.guard.service';
import { AcessoService } from 'local/shared/services/acesso/acesso.service';
import { HttpAuthorizationInterceptor } from 'local/shared/services/http.authorization.interceptor';
import { TabContentLoadOnDemandDirective } from './directive/lazyload.directive';
import { PopupAnchorDirective } from './directive/popup.anchor-target.directive';
import { CurrencyBrazil } from './pipes/currency.brazil';
import { CNPJPipe } from './pipes/cnpj.pipe';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { LabelModule } from '@progress/kendo-angular-label';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyKendoModule } from '@ngx-formly/agl-kendo';

load(likelySubtags, weekData, currencyData, numbers, currencies, calendar, dateFields, timeZoneNames);
@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		GridModule,
		ButtonsModule,
		DropDownsModule,
		InputsModule,
		TreeViewModule,
		DateInputsModule,
		LayoutModule,
		DialogsModule,
		SortableModule,
		TooltipModule,
		UploadModule,
		ChartsModule,
		IntlModule,
    AutoCompleteModule,
    IndicatorsModule,
    NotificationModule,
    LabelModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyKendoModule
		// adicionar modulos que esse modulo utilizar
	],
	declarations: [
		SpinnerComponent,
		ToastComponent,
		ErrorMessageComponent,
		EnumDisplayComponent,
		ClassDisplayComponent,
		RadioYesNoComponent,
		MenuLateralComponent,
		FormatoComponent,
		CpfPipe,
		BlockCopyPasteDirective,
    TextoBooleanPipe,
    TabContentLoadOnDemandDirective,
    PopupAnchorDirective,
    CurrencyBrazil,
    CNPJPipe
		// adicionar componentes que esse modulo utilizar
	],
	exports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		GridModule,
		ButtonsModule,
		DropDownsModule,
		DateInputsModule,
		InputsModule,
		LayoutModule,
		DialogsModule,
		TreeViewModule,
		SortableModule,
		ErrorMessageComponent,
		EnumDisplayComponent,
		ClassDisplayComponent,
		RadioYesNoComponent,
		MenuLateralComponent,
		SpinnerComponent,
		TooltipModule,
		UploadModule,
		FormatoComponent,
		ChartsModule,
		IntlModule,
		CpfPipe,
		AutoCompleteModule,
		BlockCopyPasteDirective,
    TextoBooleanPipe,
    TabContentLoadOnDemandDirective,
    PopupAnchorDirective,
    CurrencyBrazil,
    CNPJPipe,
    LabelModule,
    NotificationModule,
    FormlyModule,
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
				SpinnerService,
				ExceptionService,
				UserTokenService,
				UserPermissionService,
				MenuPermissionGuardService,
				GridButtonService,
				LoggedInGuardService,
				MessageService,
				ToastService,
				DialogService,
				CultureService,
				MenuLateralService,
				CanDeactivateGuard,
        {
					provide: HTTP_INTERCEPTORS,
					useClass: HttpSpinnerInterceptor,
					multi: true
				},
				{
					provide: HTTP_INTERCEPTORS,
					useClass: HttpErrorInterceptor,
					multi: true
				},
				{
					provide: HTTP_INTERCEPTORS,
					useClass: HttpDefaultParametersInterceptor,
					multi: true
        },

        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpAuthorizationInterceptor,
          multi: true
        },
				{ provide: LOCALE_ID, useValue: 'pt-BR' },
				FilterService,
				GridFilterService,
				GridManagerComponent,
				LOGGING_ERROR_HANDLER_PROVIDERS,
				CldrIntlService,
				PermissionsFromApiGuardService,
				AcessoService
			]
		};
	}
}
