


import {Routes, RouterModule}  from '@angular/router';

import {ComplexidadeListComponent} from './complexidade.list.component';
import {ComplexidadeCreateComponent} from './complexidade.create.component';
import {ComplexidadeDeleteComponent} from './complexidade.delete.component';
import {ComplexidadeEditComponent} from './complexidade.edit.component';
import {ComplexidadeDetailsComponent} from './complexidade.details.component';
import {ComplexidadeCreateNewResolver,ComplexidadeIdResolver} from "./complexidade.resolver";
import { CanDeactivateGuard } from '../../shared/services/router/can.deactivate.guard.service';

const routes: Routes = [
    { path: 'create', component: ComplexidadeCreateComponent, canDeactivate: [CanDeactivateGuard] ,resolve:{complexidade:ComplexidadeCreateNewResolver}},
    { path: 'delete/:id', component: ComplexidadeDeleteComponent ,resolve:{complexidade:ComplexidadeIdResolver}},
    { path: 'update/:id', component: ComplexidadeEditComponent, canDeactivate: [CanDeactivateGuard] ,resolve:{complexidade:ComplexidadeIdResolver}},
    { path: 'details/:id', component: ComplexidadeDetailsComponent ,resolve:{complexidade:ComplexidadeIdResolver}},
    { path: '', component: ComplexidadeListComponent }
];

export const routing = RouterModule.forChild(routes);
