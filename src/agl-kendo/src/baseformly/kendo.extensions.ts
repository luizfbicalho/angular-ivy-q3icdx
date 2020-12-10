import { FormlyFieldConfig } from '@ngx-formly/core';
import { CompositeFilterDescriptor, FilterDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { distinctUntilChanged, map, startWith, takeUntil } from 'rxjs/operators';
import { FormlyComponent } from './formly.component';

export class KendoExtensions {

  constructor(private Component: FormlyComponent) { }

  private getValue(value: {}|number|string, primitive: boolean, property: string) {

    if (primitive) {
      return value;
    }
    if (value && value[property]) {
      return value[property];
    }
    return null;
  }

  private getFilter(field: FormlyFieldConfig, filters: FilterDescriptor[]): CompositeFilterDescriptor {
    if (!field?.templateOptions?.parents?.length && !Array.isArray(filters)) {
      return { logic: 'and', filters: [] };
    }
    else {
      const retorno: CompositeFilterDescriptor = { logic: 'and', filters: [] };
      if (Array.isArray(filters)) {
        retorno.filters.push(...filters);
      }
      if (Array.isArray(field?.templateOptions?.parents)) {
        for (let i = 0; i < field.templateOptions.parents.length; i++) {
          const parent = field.templateOptions.parents[i];
          const form = this.GetFormGroup(field, parent);
          if (form) {
            const value = form.get(parent.key).value;

            if (!parent.multiple) {

              retorno.filters.push({ field: parent.field, operator: parent.operator, value: this.getValue(value, parent.primitive, parent.valueField) });
            }
            else if (value?.length) {
              const sub: CompositeFilterDescriptor = { logic: 'or', filters: [] };
              for (let j = 0; j < value.length; j++) {
                sub.filters.push({ field: parent.field, operator: parent.operator, value: this.getValue(value[j], parent.primitive, parent.valueField) })
              }
              retorno.filters.push(sub);

            }
            else {
              // multiplo sem ser array, estranho cair aqui
              throw new Error("Filtro multiplo sem ser array");
            }
          }
        }
      }
      return retorno;
    }
  }

  private getSort(field: FormlyFieldConfig): SortDescriptor[] {
    return [{ field: field.templateOptions.textField, dir: field.templateOptions.textOrder }];
  }

  private setOptionsValues(field: FormlyFieldConfig, filters: FilterDescriptor[]) {
    if (this.Component.Observables[this.getKeyString(field.key)]) {
      field.templateOptions.options = this.Component.Observables[this.getKeyString(field.key)]({ sort: this.getSort(field), filter: this.getFilter(field,filters) });
    }
  }

  public filterOptions(field: FormlyFieldConfig, filters: FilterDescriptor[]) {
    this.setOptionsValues(field, filters);
  }

  public loadOptions(field: FormlyFieldConfig) {
    if (!field?.templateOptions?.parents?.length) {
      this.setOptionsValues(field,[]);
    }
    else {
      for (let i = 0; i < field.templateOptions.parents.length; i++) {
        const parent = field.templateOptions.parents[i];
        const form = this.GetFormGroup(field, parent);
        if (form) {
          const parentForm = form.get(parent.key);
          parent.observable = parentForm.valueChanges.pipe(
            distinctUntilChanged((x, y) => { return Object.is(JSON.stringify(x), JSON.stringify(y)); }),
            map((value) => { return { value: value, start: false }; }),
            takeUntil(this.Component.Destroy$),
            startWith({ value: parentForm.value, start:true }))
            .subscribe((value) => {

              this.setOptionsValues(field, []);
              if (!value.start) {
                field.formControl.setValue(null);
              }
            });
        }
      }
    }
  }

  private getKeyString(parm: string | number | string[]): string | number {
    if (!parm) { return undefined };
    if (typeof parm === "string") { return parm; }
    if (typeof parm === "number") { return parm; }
    return parm.join('.');
  }

  private GetFormGroup(field: FormlyFieldConfig, parent: {relativeTo: number}) {
      let form = field.formControl.parent;
        for (let j = 0; j < parent.relativeTo; j++) {
          form = form?.parent;
        }
        return form;
    }
}
