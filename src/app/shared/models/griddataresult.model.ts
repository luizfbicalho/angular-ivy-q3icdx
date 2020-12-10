import { GridDataResult } from "@progress/kendo-angular-grid";
import { translateDataSourceResultGroups, translateAggregateResults } from "@progress/kendo-data-query";

export function getGridDataResult({ Data, Total, Aggregates }: any, hasGroups: any): GridDataResult
{
    return <GridDataResult>{
      //if there are groups convert them to compatible format
      data: hasGroups ? translateDataSourceResultGroups(Data) : Data,
      total: Total,
      // convert the aggregates if such exists
      aggregateResult: translateAggregateResults(Aggregates)
  };
}

export function getGridDataResultAvuls(data: any[]): GridDataResult {
    return <GridDataResult>{
        data: data,
        total: data.length
    };
}
