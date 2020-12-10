import { Directive, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DataSourceRequestState } from '@progress/kendo-data-query';
import { Observable, Subject } from 'rxjs';
import { KendoExtensions } from './kendo.extensions';

export interface FormlyComponent {
  readonly Form: FormGroup | FormArray;
  readonly Observables: ObservableKendoActionAutocomplete;
  readonly Destroy$: Observable<{}>;
}

export interface ObservableKendoActionAutocomplete {
  [index: string]: (source: DataSourceRequestState) => Observable<{}[]>;
}

/// aqui tinha uma diretiva

@Directive()
export abstract class BaseFormlyComponent<T extends {}> implements OnDestroy, FormlyComponent, OnInit {
  private destroy$ = new Subject();
  protected Extensions: KendoExtensions;
  public readonly Form = this.CreateForm();
  private observables: ObservableKendoActionAutocomplete = {};
  private fields: FormlyFieldConfig[] = []
  public Model: T;

  protected CreateForm(): FormGroup|FormArray {
    return new FormGroup({});
  }

  public get Observables() { return this.observables; }
  public get Destroy$() { return this.destroy$.asObservable(); }
  public get Fields() { return this.fields; }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  constructor() {
    this.Extensions = new KendoExtensions(this);
  }

  ngOnInit(): void {
    this.fields = this.SetFields();
    this.observables = this.SetObservables();
    this.InitFields(this.Fields);
  }
   protected SetObservables(): ObservableKendoActionAutocomplete {
     return {};
   }

  private InitFields(fields: FormlyFieldConfig[]) {
    for (let i = 0; i < fields.length; i++) {
      this.BeforeInitField(fields[i]);
      fields[i].hooks = {
        onInit: field => this.Extensions.loadOptions(field)
      };
      if (fields[i]?.templateOptions?.filterable ?? false) {
        fields[i].templateOptions.filter = (field: string, operator: string, value: string) => {
          if (field && field.length > 0) {
            this.Extensions.filterOptions(fields[i], [{ operator, field, value }]);
          }
          else {
            this.Extensions.filterOptions(fields[i], []);
          }
        };
      }
      if (fields[i].fieldGroup) {
        this.InitFields(fields[i].fieldGroup);
      }
      if (fields[i].fieldArray && fields[i].fieldArray.fieldGroup) {
        this.InitFields(fields[i].fieldArray.fieldGroup)
      }
      this.BeforeInitField(fields[i]);
    }
  }

  protected BeforeInitField(field: FormlyFieldConfig): void { return;}

  protected AfterInitField(field: FormlyFieldConfig): void { return;}

  protected abstract SetFields(): FormlyFieldConfig[];
}
