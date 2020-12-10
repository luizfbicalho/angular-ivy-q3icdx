import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';

@Pipe({ name: 'optionsAsync' })
export class OptionsAsyncPipe implements PipeTransform {
  transform(options: any): Observable<any[]> {
    if (!(options instanceof Observable)) {
      options = of(options);
    }

    return (options);
  }
}
