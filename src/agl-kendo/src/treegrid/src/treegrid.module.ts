import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';


import { KendoTreeGridComponent } from './treegrid.type';
import { KendoFormlySharedModule } from '../../shared/kendo.shared.module';
import { TreeListModule } from '@progress/kendo-angular-treelist';
import { FormlyFormFieldModule } from '../../form-field/src/form-field.module';


@NgModule({
  declarations: [KendoTreeGridComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TreeListModule ,
    KendoFormlySharedModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'treegrid',
          component: KendoTreeGridComponent,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyTreeGridModule { }
