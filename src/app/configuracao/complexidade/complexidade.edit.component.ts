import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import { CanDeactivateComponent } from '../../shared/models/can.deactivate.component';
import { Complexidade } from '../../models/complexidade.model';

import {ComplexidadeService} from "./complexidade.service";

import { Subscription } from 'rxjs';


import { BaseFormlyComponent } from '../../../agl-kendo/src/public-api';
import { takeUntil } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import * as fieldsJson from "./complexidade.json";

@Component({
     templateUrl : './complexidade.edit.component.html'
})
export class ComplexidadeEditComponent  extends BaseFormlyComponent<Complexidade> implements CanDeactivateComponent {
  

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
      console.log(this.Form);
      console.log(this.Form.enabled);
      console.log(this.Model);
    }

  onSubmit(): void {


        if (this.Form.valid) {
            this._bindService.put(this.Model).pipe(takeUntil(this.Destroy$)).subscribe(
                x => {
                    this.Form.markAsPristine();
                    this.onBack();
                }, // a cada resposta
                error => { /*this.form.AddToModelState(error.error.ModelState);*/ },//on error
                () => { });//ao completar 
        }
    }

    onBack(): void {
        this._router.navigate(['../../'], { relativeTo: this._route });
    }

    canDeactivate: () => boolean = () => !this.Form.dirty;

    CreateForm = () => new FormGroup({});

    SetFields = () => fieldsJson.fields;

    SetObservables = () =>
        ({
         
        })
}
