import { Component, Input, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { CultureService } from '../services/culture.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'agl-enum-display',
  templateUrl: './enum.display.component.html'
})
export class EnumDisplayComponent implements OnInit{



  constructor() {

  }
  @Input() value: number;
  @Input() displayValues: Observable<{ text: string; value: number; }[]>;
  @Input() displayValuesNotObservable: { text: string; value: number; }[] = [];
  @Input() textOnly: boolean = false;
  private _values: { text: string; value: number; }[] = []
  ngOnInit(): void {
    if (this.displayValuesNotObservable.length > 0) {
      this._values = this.displayValuesNotObservable;
    }
    else {
      this.displayValues.subscribe(x => { this._values = x; })
    }
  }

  get displayValue(): string {
    let val = this._values.find(x => x.value == this.value);
    if (val) {
      return val.text;
    }
    return "";
  }
}
