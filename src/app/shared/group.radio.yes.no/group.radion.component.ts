import { Component, Input, EventEmitter, Output, AfterViewInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { CheckableSettings } from "@progress/kendo-angular-treeview";

@Component({
  selector: 'agl-group-radion-yes-no',
  templateUrl: './group.radion.component.html'
})
export class RadioYesNoComponent implements AfterViewInit {

  @Input()
  controlName: string

  @Input()
  model: FormGroup

  @Input()
  readonly: boolean;

  @Output() clickRadio: EventEmitter<boolean> = new EventEmitter<boolean>();

  radioButtonChange(event: boolean) {
    this.clickRadio.emit(event);

  }

  ngAfterViewInit(): void {
    if (this.readonly) {
      this.model.controls[this.controlName].disable();
    }
  }


}
