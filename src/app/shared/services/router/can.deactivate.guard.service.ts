
import {from as observableFrom,  Observable } from 'rxjs';
import { CanDeactivate } from '@angular/router';


import { Injectable }             from '@angular/core';
import { CanDeactivateComponent } from '../../models/can.deactivate.component';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanDeactivateComponent> {
   
    canDeactivate(component: CanDeactivateComponent): Observable<boolean> | boolean {
        if (!component.canDeactivate()) {// Otherwise ask the user with the dialog service and return its
            //// promise which resolves to true or false when the user decides
            //let p = this._dialogService.confirm('Descartar as alterações?');
            //let o = observableFrom(p);
            //return o;
        }
        return true;
    }

}
