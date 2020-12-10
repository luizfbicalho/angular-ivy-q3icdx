

import {Component, NgModule}      from '@angular/core';
import {SharedModule}  from 'local/shared/shared.module';
import {routing} from './complexidade.routing';
import {ComplexidadeListComponent} from './complexidade.list.component';
import {ComplexidadeCreateComponent} from './complexidade.create.component';
import {ComplexidadeDeleteComponent} from './complexidade.delete.component';
import {ComplexidadeEditComponent} from './complexidade.edit.component';
import {ComplexidadeDetailsComponent} from './complexidade.details.component';
import {ComplexidadeService} from "./complexidade.service";
import {ComplexidadeCreateNewResolver,ComplexidadeIdResolver} from "./complexidade.resolver";
@NgModule({
    imports: [SharedModule, routing],
    declarations: [ComplexidadeCreateComponent, ComplexidadeDeleteComponent, ComplexidadeDetailsComponent, ComplexidadeEditComponent, ComplexidadeListComponent],
    providers: [ComplexidadeService,ComplexidadeCreateNewResolver,ComplexidadeIdResolver]
})
export class ComplexidadeModule { }
