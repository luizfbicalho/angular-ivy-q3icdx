import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-kendo-select',
  template: `
    <kendo-combobox 
      [class.k-state-invalid]="showError"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [data]="to.options | optionsAsync | async "
      [textField]="to.textField"
      [valueField]="to.valueField"
      [valuePrimitive]="to.primitive"
      [filterable]="to.filterable"
      (filterChange)="handleFilter($event)"
      (valueChange)="to.change && to.change(field, $event)"
    >
    </kendo-combobox>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldSelect extends FieldType {
  defaultOptions = {
    templateOptions: {
      textField: "label", valueField: "value", primitive: true, filterable:false,minFilter:0,
      options: []
    },
  };
  handleFilter(value) {
    if (value.length >= this.to.minFilter) {
      this.field.templateOptions.filter(this.to.textField, this.to.filterOperator, value);
    }
  }
}
