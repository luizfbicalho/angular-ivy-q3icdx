

import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';

import {Complexidade} from 'local/models/complexidade.model';
import { Subscription } from 'rxjs';
import { BaseFormlyComponent } from '@ngx-formly/agl-kendo';
import { takeUntil } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import * as fieldsJson from "./complexidade.json";

@Component({
    templateUrl : './complexidade.details.component.html'
})
export class ComplexidadeDetailsComponent  extends BaseFormlyComponent<Complexidade>   {
  

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
      ) {
        super();
      }
    
    ngOnInit(): void {
        super.ngOnInit();
        this.Model = this._route.snapshot.data['complexidade'];
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
