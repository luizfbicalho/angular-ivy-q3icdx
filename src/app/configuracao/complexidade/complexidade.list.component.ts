
import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ComplexidadeService } from "./complexidade.service";
import { GridManagerComponent } from 'local/shared/grid.manager/grid.manager';
import { ColumnSettings } from 'local/shared/models/column-settings';
import { GridFilterService } from 'local/shared/services/gridfilter.service';

@Component({
    templateUrl: './complexidade.list.component.html',
    styles: ['.actionbutton { margin-right: 20px; cursor: pointer; }']
})
export class ComplexidadeListComponent implements OnInit {
    

    constructor(private _complexidadeService: ComplexidadeService, private _router: Router,  private _route: ActivatedRoute, public manager: GridManagerComponent) {
        let columns: ColumnSettings[] = [
        
        {
            field: "Definicao",
            title: "Definicao",
            type: "string"
        },
        {
            field: "Tamanho",
            title: "Tamanho",
            type: "number"
        },
        {
            field: "Descricao",
            title: "Descrição",
            type: "string"
        }
        ];
        // descomentar a linha abaixo e comentar a seguinte se tiver permissao para ver os botoes do grid
        //this.manager.config(columns, (s) => this._complexidadeService.post(s), this._router.url,'complexidade');

        this.manager.config(columns, (s) => this._complexidadeService.postGrid(s), this._router.url);
    }
    
    
    ngOnInit(): void {
        this.manager.carregarGrid();
    }

    edit(e) {
        this.manager.saveFilter();
        this._router.navigate(['update', e.Id], { relativeTo: this._route });
    }

    delete(e) {
        this.manager.saveFilter();
        this._router.navigate(['delete', e.Id], { relativeTo: this._route });
    }

    details(e) {
        this.manager.saveFilter();
        this._router.navigate(['details', e.Id], { relativeTo: this._route });
    }
    
    create() {
        this.manager.saveFilter();
        this._router.navigate(['create'], { relativeTo: this._route });
    }
}