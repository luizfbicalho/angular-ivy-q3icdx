

import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { CanDeactivateComponent } from '../../shared/models/can.deactivate.component';
import { Complexidade } from '../../models/complexidade.model';
import {ComplexidadeService} from "./complexidade.service";

import { Subscription } from 'rxjs';
import { BaseFormlyComponent } from '../../../agl-kendo/src/public-api';
import { takeUntil } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import * as fieldsJson from "./complexidade.json";

@Component({
    templateUrl : './complexidade.delete.component.html'

})
export class ComplexidadeDeleteComponent  extends BaseFormlyComponent<Complexidade>   {
  

    constructor(
        private _bindService: ComplexidadeService,
        private _router: Router,
        private _route: ActivatedRoute
      ) {
        super();
      }
    
    ngOnInit(): void {
        super.ngOnInit();
        this.Model = this._route.snapshot.data['complexidade'];
    }

    onSubmit(): void {
        this._bindService.delete(this.Model.Id).pipe(takeUntil(this.Destroy$)).subscribe(
            x => {
                this.onBack();
            }, // a cada resposta
            error => { /*this.form.AddToModelState(error.error.ModelState);*/ },//on error
            () => { });//ao completar 
    }

    onBack(): void {
        this._router.navigate(['../../'], { relativeTo: this._route });
    }


    CreateForm() {
        const retorno = new FormGroup({});
        retorno.disable();
        return retorno;
    };

    SetFields = () => fieldsJson.fields;

    SetObservables = () =>
        ({
         
        })
}
