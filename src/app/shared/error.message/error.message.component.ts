import { Component, Input } from '@angular/core';

import { FormControl } from '@angular/forms';
import { CultureService } from '../services/culture.service';

@Component({
	selector: 'agl-error-message',
	templateUrl: './error.message.component.html'
})
export class ErrorMessageComponent {
	defaultLanguage: string = '';
	constructor(private _cultureService: CultureService) {}
	@Input() control: FormControl;
	@Input() controlName: string;
	@Input() forcePrestine: boolean;
	@Input() specificMessage: string;

	@Input() messages: { [field: string]: { [validationKey: string]: { [language: string]: string } } };

	getErrorMessage(error: any) {
		let messagesLocal: any;
		if (this.messages['default']) {
			messagesLocal = this.messages['default'];
		} else {
			messagesLocal = this.messages;
		}
		if (this.specificMessage) {
			if (this.specificMessage != error) return null;

			if (messagesLocal[''][this.specificMessage][this._cultureService.getCurrentCulture()]) {
				return messagesLocal[''][this.specificMessage][this._cultureService.getCurrentCulture()];
			} else if (messagesLocal[''][this.specificMessage][this.defaultLanguage]) {
				return messagesLocal[''][this.specificMessage][this.defaultLanguage];
			}
		} else if (
			this.messages &&
			messagesLocal[this.controlName] &&
			messagesLocal[this.controlName][error] &&
			messagesLocal[this.controlName][error][this._cultureService.getCurrentCulture()]
		) {
			return messagesLocal[this.controlName][error][this._cultureService.getCurrentCulture()];
		} else if (
			this.messages &&
			messagesLocal[this.controlName] &&
			messagesLocal[this.controlName][error] &&
			messagesLocal[this.controlName][error][this.defaultLanguage]
		) {
			return messagesLocal[this.controlName][error][this.defaultLanguage];
		} else {
			return `Validation for Field: ${this.controlName} and Key: ${error} has no message defined`;
		}
	}

	get errors(): Array<string> {
		let retorno: Array<string> = [];

		for (let item in this.control.errors) {
			retorno.push(item);
		}
		return retorno;
	}
}
