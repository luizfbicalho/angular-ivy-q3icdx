import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';



import { KendoGridComponent } from './grid.type';
import { KendoFormlySharedModule } from '../../shared/kendo.shared.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { FormlyFormFieldModule } from '../../form-field/src/form-field.module';


@NgModule({
  declarations: [KendoGridComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GridModule,
    KendoFormlySharedModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'grid',
          component: KendoGridComponent,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyGridModule { }
