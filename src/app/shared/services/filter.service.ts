import { Injectable } from '@angular/core';

@Injectable()
export class FilterService {
    private baseKey: string = "FilterService-";
    public saveFilter(filter: any, key: string): void {
        if (filter) {
            sessionStorage.setItem(this.baseKey + key, JSON.stringify(filter));
        }
    }

  public getFilter(key: string): any {
        var strFilter = sessionStorage.getItem(this.baseKey + key);
        if (strFilter) {
          var filter = JSON.parse(strFilter);
            if (filter) {
                this.removeItem(this.baseKey + key);
                return filter;
            }
        }
        return null;
    }
    public clearFilters() {
        for (let item in sessionStorage) {
            if (item.startsWith(this.baseKey)) {
                this.removeItem(item);
            }
        }
    }
    public removeItem(key: string): void {
        sessionStorage.removeItem(key);
    }

    public dateAdapter(data: any, propertyName: string): void {
        let date = data.filter.filters.find(x => x.field == propertyName);

        if (date != null) {
            if (date.value != null) {
                let splitted = date.value.split('/');

                if (splitted.length == 3) {
                    date.value = new Date(parseInt(splitted[2]), parseInt(splitted[1]) - 1, parseInt(splitted[0]))
                }
            }
        }
    }
}
