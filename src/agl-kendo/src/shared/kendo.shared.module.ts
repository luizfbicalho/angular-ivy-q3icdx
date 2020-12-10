import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FormlySelectModule as FormlyCoreSelectModule } from '@ngx-formly/core/select';

import { OptionsAsyncPipe } from './options.async.pipe';

@NgModule({
  declarations: [ OptionsAsyncPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropDownsModule,
    FormlyCoreSelectModule,
  ],
  exports: [OptionsAsyncPipe]
})
export class KendoFormlySharedModule { }
