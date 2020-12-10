import { NgModule } from '@angular/core';
import { FormlyCheckboxModule } from '../checkbox/src/checkbox.module';
import { FormlyFormFieldModule } from '../form-field/src/form-field.module';
import { FormlyGridModule } from '../grid/src/grid.module';
import { FormlyHtmlEditorModule } from '../htmleditor/src/htmleditor.module';
import { FormlyInputModule } from '../input/src/input.module';
import { FormlyMultiSelectModule } from '../multiselect/src/multiselect.module';
import { FormlyRadioModule } from '../radio/src/radio.module';
import { FormlySelectModule } from '../select/src/select.module';
import { FormlyTextAreaModule } from '../textarea/src/textarea.module';
import { FormlyTreeGridModule } from '../treegrid/src/treegrid.module';


@NgModule({
  imports: [
    FormlyFormFieldModule,
    FormlyInputModule,
    FormlyTextAreaModule,
    FormlyRadioModule,
    FormlyCheckboxModule,
    FormlySelectModule,
    FormlyMultiSelectModule,
    FormlyGridModule,
    FormlyTreeGridModule,
    FormlyHtmlEditorModule
  ],
})
export class FormlyKendoModule {}
