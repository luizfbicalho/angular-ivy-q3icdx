import { Component, OnInit, AfterViewInit, ViewChild, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, Validator, FormControl, NG_VALIDATORS } from '@angular/forms';

export const EDITORFORMATO_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormatoComponent),
  multi: true,
};

export const EDITORFORMATO_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => FormatoComponent),
  multi: true,
};

@Component({
  selector: 'even-formatodado',
  providers: [EDITORFORMATO_VALUE_ACCESSOR, EDITORFORMATO_VALIDATOR],
  templateUrl: './formato.component.html'
})

export class FormatoComponent implements OnInit, ControlValueAccessor, Validator {

  @Input()
  readOnly: boolean;

  formato = [
    { text: "Númerico", value: 'n' },
    { text: "Moeda", value: 'c' },
    { text: "Data", value: 'date' },
    { text: "Porcentagem", value: 'p' }
  ];

  formatodata = [{ text: "MM/AAAA", value: "yyyy/MM" }];

  TipoEscolhido: string;
  FormatoEscolhido: number;
  FormatoEscolhidoData: string;
  numerico: boolean;
  autoCorrect: boolean;

  ngOnInit(): void {
    this.numerico = false;
  }

  onChange;
  onTouched;

  onValueFormatoChange() {
    this.FormatoEscolhido = null;
    this.FormatoEscolhidoData = null;

    this.numerico = this.TipoEscolhido != "date"
    this.onChange(null);

  }

  writeValue(value: any): void {
    if (value !== undefined && value !== null) {

      
      // Vejo se não e date
      if (value.indexOf("date") == -1) {

        this.TipoEscolhido = value.charAt(0);
        this.FormatoEscolhido = Number(value.charAt(1));
        this.numerico = true;
      }
      else {
        this.TipoEscolhido = 'date';
        this.FormatoEscolhidoData = value.substring(value.indexOf("_") + 1);

      }
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {

  }

  onValueChange() {

    if ((this.numerico && this.FormatoEscolhido != null) || (!this.numerico && this.FormatoEscolhidoData)) {
      this.onChange(this.TipoEscolhido + (this.numerico ? this.FormatoEscolhido : "_" + this.FormatoEscolhidoData));
    }
    else {
      this.onChange(null);
    }
  }

  public validate(c: FormControl) {
    if (this.TipoEscolhido) {
      if (this.FormatoEscolhido == null && !this.FormatoEscolhidoData) {
        return {
          IncompletoValue: {
            valid: false,
          }
        }

      }
    }

    return null;
  }
  
}
