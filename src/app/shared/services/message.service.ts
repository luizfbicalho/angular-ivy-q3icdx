import {Injectable} from '@angular/core';
import { ToastService } from '../toast/toast.service';
import * as data from '../resources/messages.json';
@Injectable()
export class MessageService {
    public constructor(private _toastService: ToastService) { }

    public GetToastService(): ToastService {
        return this._toastService;
    }

    get messages(): { [field: string]: { [validationKey: string]: { [language: string]: string } } } {
        return data;
    }
}
