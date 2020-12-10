import { Injectable } from '@angular/core';
import { FilterService } from './filter.service';
import { DataSourceRequestState } from '@progress/kendo-data-query';
import { GridManagerComponent } from '../grid.manager/grid.manager';
import { ColumnSettings } from 'local/shared/models/column-settings';

export interface IGridState {
  filtros: /*IFiltro |*/ IFiltro[];
   state: DataSourceRequestState;
}

export interface IFiltro {
   filtroValor: string; selectedColumn: ColumnSettings;
}

@Injectable()
export class GridFilterService {
    constructor(private _filterService: FilterService) {
    }

  public saveFilter(filter: IGridState, key: string): void {
    this._filterService.saveFilter(filter, 'GridFilterService' + key);
      }

  public getFilter(key: string): IGridState {
    var options = this._filterService.getFilter('GridFilterService' + key);
    if (options) {
       return options;
    }
    else {

      var retorno: IGridState = {
        filtros: [{
          filtroValor: "",
          selectedColumn: null
        }],
         state: {
          skip: 0,
            take: 10,
              // Initial filter descriptor
              filter: {
            logic: 'and',
              filters: []
          }
        }
      };
      return retorno;
    }
  }
}

