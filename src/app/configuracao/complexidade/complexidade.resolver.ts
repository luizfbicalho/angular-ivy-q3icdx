import {  Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import {ComplexidadeService} from "./complexidade.service";

import { Observable } from 'rxjs';
import { Complexidade } from '../../models/complexidade.model';

@Injectable()
export class ComplexidadeIdResolver  implements Resolve<Complexidade> {
    constructor(private _bindService: ComplexidadeService) { }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Complexidade> {
        const id = route.paramMap.get('id');
        return this._bindService.getById(+id);
    }
 
}
@Injectable()
export class ComplexidadeCreateNewResolver  implements Resolve<Complexidade> {
    constructor(private _bindService: ComplexidadeService) { }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Complexidade> {

        return this._bindService.create();
    }
 
}
