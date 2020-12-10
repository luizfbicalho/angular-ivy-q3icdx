import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import {HttpError} from 'local/shared/models/httperror';
import {CanDeactivateComponent } from 'local/shared/models/can.deactivate.component'
import {ComplexidadeService} from "./complexidade.service";
import {Complexidade} from 'local/models/complexidade.model';

import { takeUntil } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import * as fieldsJson from "./complexidade.json";
import { BaseFormlyComponent } from '../../../agl-kendo/src/public-api';

@Component({
    templateUrl : './complexidade.create.component.html'
})
export class ComplexidadeCreateComponent  extends BaseFormlyComponent<Complexidade> implements CanDeactivateComponent {
  

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
        if (this.Form.valid) {
            this._bindService.post(this.Model).pipe(takeUntil(this.Destroy$)).subscribe(
                x => {
                    this.Form.markAsPristine();
                    this.onBack();
                }, // a cada resposta
                error => { /*this.form.AddToModelState(error.error.ModelState);*/ },//on error
                () => { });//ao completar 
        }
    }

    onBack(): void {
        this._router.navigate(['../'], { relativeTo: this._route });
    }

    canDeactivate: () => boolean = () => !this.Form.dirty;

    CreateForm = () => new FormGroup({});

    SetFields = () => fieldsJson.fields;

    SetObservables = () =>
        ({
         
        })
}
