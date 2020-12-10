


import {Injectable,Inject} from '@angular/core';

import {HttpClient, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {Observable, of }  from 'rxjs';


import { map, catchError } from 'rxjs/operators';

import { throwError } from 'rxjs';

import { DataSourceRequestState } from '@progress/kendo-data-query';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { Complexidade } from '../../models/complexidade.model';
import { getGridDataResult } from '../../shared/models/griddataresult.model';
import { EntidadeId } from '../../models/entidadeid.model';

//https://medium.com/angular-in-depth/expecting-the-unexpected-best-practices-for-error-handling-in-angular-21c3662ef9e4
@Injectable()
export class ComplexidadeService {
    constructor(private $http: HttpClient,
    @Inject('ApiEndpoint') private apiEndpoint: string) { } 

  private data: Complexidade[] = [
     { Id: 0, Descricao: "Simples", Tamanho: 0, Definicao: "<p><b><i>Test 0 </i></b>/<p>" },
    { Id: 1, Descricao: "Simples 1", Tamanho: 1, Definicao: "<p><b><i>Test 1 </i></b>/<p>" },
    { Id: 2, Descricao: "Simples 2", Tamanho: 2, Definicao: "<p><b><i>Test 2 </i></b>/<p>" },
    { Id: 3, Descricao: "Simples 3", Tamanho: 3, Definicao: "<p><b><i>Test 3 </i></b>/<p>" },
    { Id: 4, Descricao: "Simples 4", Tamanho: 4, Definicao: "<p><b><i>Test 4 </i></b>/<p>" },
    { Id: 5, Descricao: "Simples 5", Tamanho: 5, Definicao: "<p><b><i>Test 5 </i></b>/<p>" },
    { Id: 6, Descricao: "Simples 6", Tamanho: 6, Definicao: "<p><b><i>Test 6 </i></b>/<p>" },
    { Id: 7, Descricao: "Simples 7", Tamanho: 7, Definicao: "<p><b><i>Test 7 </i></b>/<p>" },
    { Id: 8, Descricao: "Simples 8", Tamanho: 8, Definicao: "<p><b><i>Test 8 </i></b>/<p>" },
    { Id: 9, Descricao: "Simples 9", Tamanho: 9, Definicao: "<p><b><i>Test 9 </i></b>/<p>" },
    { Id: 10, Descricao: "Simples 10", Tamanho:10, Definicao: "<p><b><i>Test 10 </i></b>/<p>" },
    { Id: 11, Descricao: "Simples 11", Tamanho: 11, Definicao: "<p><b><i>Test 11 </i></b>/<p>" },
    { Id: 12, Descricao: "Simples 12", Tamanho: 112, Definicao: "<p><b><i>Test 12 </i></b>/<p>" },

  ];   

    
   
  public postGrid = (request: DataSourceRequestState): Observable<GridDataResult> => {
    return of(getGridDataResult({ Data: this.data, Total: this.data.length, Aggregates: [] }, false));

	}
    
    
   
  public getById = (id: number): Observable<Complexidade> => {
    return of(this.data[id]);
	}
    
    
   
	public create = () : Observable<Complexidade> => {
    return of(new Complexidade());
	}
    
    
   
	public post = (value: Complexidade) : Observable<Complexidade> => {
    return of(new Complexidade());

	}
    
	private stringfyPost(p:Complexidade):string {
		const parameter = EntidadeId.Clone(p);
		return JSON.stringify(parameter);
	}

    
   
	public put = (value: Complexidade) : Observable<Complexidade> => {
    return of(new Complexidade());

	}
    
	private stringfyPut(p:Complexidade):string {
		const parameter = EntidadeId.Clone(p);
		return JSON.stringify(parameter);
	}

    
   
  public delete = (id: number): Observable<Complexidade> => {
    return of(new Complexidade());
	}
    
    
   
    

}
