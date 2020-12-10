import { Component, Input, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { CultureService } from '../services/culture.service';
import { Observable } from 'rxjs';
import { EntidadeBaseDescricao } from 'local/models/entidadebasedescricao.model';



@Component({
  selector: 'agl-class-display',
  templateUrl: './class.display.component.html'
})
export class ClassDisplayComponent implements OnInit {

  @Input() value: EntidadeBaseDescricao;
  @Input() displayValues: Observable<EntidadeBaseDescricao[]>;

  private _values: EntidadeBaseDescricao[] = []

  ngOnInit(): void {
    this.displayValues.subscribe(x => { this._values = x; })
  }

  get displayValue(): string {

    if (this.value == null)
      return "";

    let val = this._values.find(x => x.Id == this.value.Id);
    if (val) {
      return val.Descricao
    }
    return "";
  }

}
