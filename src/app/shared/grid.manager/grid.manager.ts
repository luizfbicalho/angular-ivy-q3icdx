import { GridDataResult } from "@progress/kendo-angular-grid";

import { DataSourceRequestState, FilterDescriptor, CompositeFilterDescriptor } from "@progress/kendo-data-query";
import { Observable } from "rxjs";
import { GridFilterService, IGridState, IFiltro } from "../services/gridfilter.service";

import { Injectable } from "@angular/core";
import { ColumnSettings } from '../models/column-settings';

@Injectable()
export class GridManagerComponent implements IGridState  {

  private _columns: ColumnSettings[];
  private _callback: (s: DataSourceRequestState) => Observable<GridDataResult>;
  private _keyName: string;
  _permissao: string = null;


  constructor( private _gridFilterService: GridFilterService )
  {
  }

  public config(columns: ColumnSettings[], callback: (s: DataSourceRequestState) => Observable<GridDataResult>, keyName: string, permissao: string = null) {
    this._columns = columns;
    this.gridData = null;
    this._callback = callback;
    this._keyName = keyName;
    this._permissao = permissao

    var temp = this._gridFilterService.getFilter(this._keyName);
    this.state = temp.state;

    if (Array.isArray(temp.filtros)) {
      for (var f of temp.filtros) {
        this.SetColumn(f, columns);
      }
    }
    else {
      this.SetColumn(temp.filtros, columns);
    }
    this.filtros = temp.filtros;
  }

  private SetColumn(f: IFiltro, columns: ColumnSettings[]) {
    if (f.selectedColumn) {
      f.selectedColumn = columns.find(x => x.field == f.selectedColumn.field);
    }
  }

  get columns() { return this._columns; }

  public gridData: GridDataResult;
  public filtros: /*IFiltro |*/ IFiltro[] = [{ filtroValor: "", selectedColumn: null }];

  get filtro(): IFiltro {
      if (Array.isArray(this.filtros) && this.filtros.length > 0) {
          return this.filtros[0];
      }
      return { filtroValor: "", selectedColumn: null };
  }

  set filtro(newFiltro: IFiltro) {
      if (!Array.isArray( this.filtros)) {
          this.filtros = [];
      }
      if (this.filtros.length > 0) {
          this.filtros[0] = newFiltro;
      }
      else {
          this.filtros.push(newFiltro);
      }
  }

  public state: DataSourceRequestState;

  dataStateChange(newState: DataSourceRequestState) {
    this.state = newState;
    this.carregarGrid();
  }

  carregarGrid() {
    this._callback(this.state).subscribe(x => this.gridData = x);
  }
  saveFilter() {
    let x: IGridState = { filtros: this.filtros , state: this.state };
    this._gridFilterService.saveFilter(x , this._keyName);
  }

  validarBotao(botao: string): boolean {
   
    return true;
  }

  filtrar() {
    this.state.skip = 0;
    this.state.filter = {
      logic: 'and',
      filters: []
    };
    if (Array.isArray(this.filtros)) {
      for (var f of this.filtros) {
        this.addFiltro(f);
      }
    }
    else {
      this.addFiltro(this.filtros);
    }
    this.carregarGrid();
  }

  private addFiltro(f: IFiltro) {
    if (f.selectedColumn && f.filtroValor) {
      let filtro: FilterDescriptor = {
        field: "",
        value: null,
        operator: ""
      };
      switch (f.selectedColumn.type) {
        case 'numeric':
          filtro.field = f.selectedColumn.field;
          filtro.operator = 'eq';
          filtro.value = +f.filtroValor;
          break;
        case 'boolean':
          filtro.field = f.selectedColumn.field;
          filtro.operator = 'eq';
          filtro.value = f.filtroValor;
          break;
        case 'Date':
          filtro.field = f.selectedColumn.field;
          filtro.operator = 'gte';
          filtro.value = f.filtroValor;
          break;
        default:
          filtro.field = f.selectedColumn.field;
          filtro.operator = 'contains';
          filtro.value = f.filtroValor;
      }

      this.state.filter.filters.push(filtro);
    }
  }
}
