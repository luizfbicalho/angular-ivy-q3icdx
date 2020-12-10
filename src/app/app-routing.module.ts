import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },

  {
    path: 'complexidade',
    loadChildren: () => import('./configuracao/complexidade/complexidade.module').then(m => m.ComplexidadeModule)
  }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
