import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';
import {  GridComponent } from '@progress/kendo-angular-grid';
import { AddEvent, CancelEvent, EditEvent, RemoveEvent, SaveEvent, TreeListComponent } from '@progress/kendo-angular-treelist';

@Component({
  selector: 'formly-field-kendo-treegrid',
  templateUrl: './treegrid.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KendoTreeGridComponent extends FieldArrayType  {

  @ViewChild('grid')
  grid: GridComponent;

  isEditMode = false;
  originalDados = [];
  public editedItem: any;

  public get rootData(): any[] {
    return this.model.filter(x => x[this.to.parentIdField] == 0);
  }
  public fetchChildren = (item: any): any[] => {
    return this.model.filter(x => x[this.to.parentIdField] == item[this.to.idField]);
  }

  public hasChildren = (item: any): boolean => {
    return item.hasChildren;
  }

  public addHandler({ sender, parent }: AddEvent): void {
    // Close the current edited row, if any.
    this.closeEditor(sender);

    // Expand the parent.
    if (parent) {
      sender.expand(parent);
    }

    // Define all editable fields validators and default values
    let novo = {};
    novo[this.to.parentIdField] = parent ? parent[this.to.idField] : 0;
    if (parent) {
      parent.hasChildren = true;
    }
    novo[this.to.idField] = Math.max(...this.model.map(m => m[this.to.idField]))>0 ? Math.max(...this.model.map(m => m[this.to.idField]))+1 : 1;
    this.add(null, novo)

    // Show the new row editor, with the `FormGroup` build above
  }

  public editHandler({ sender, dataItem, }: EditEvent): void {
    // Close the current edited row, if any.
    this.closeEditor(sender, dataItem);

    // Define all editable fields validators and default values
    let rowIndex = this.getRowIndex(dataItem);
    this.editedItem = { ...dataItem };

    // Put the row in edit mode, with the `FormGroup` build above
    sender.editRow(dataItem, this.formControl.controls[rowIndex]);
  }

  getRowIndex(dataItem): number {
    return this.model.indexOf(dataItem)
  }

  public cancelHandler({ sender, dataItem, isNew }: CancelEvent): void {
    // Close the editor for the given row
    this.formControl.controls[this.getRowIndex(dataItem)].reset(this.editedItem);
    this.closeEditor(sender, dataItem, isNew);
  }

  public saveHandler({ sender, dataItem, parent, formGroup, isNew }: SaveEvent): void {

    // Collect the current state of the form.
    // The `formGroup` argument is the same as was provided when calling `editRow`.
    const employee: any = formGroup.value;

    if (!isNew) {
      // Reflect changes immediately
      Object.assign(dataItem, employee);
    } else if (parent) {
      // Update the hasChildren field on the parent node
      parent.hasChildren = true;
    }

    if (parent) {
      // Reload the parent node to reflect the changes.
      sender.reload(parent);
    }
    sender.closeRow(dataItem, isNew);
    this.closeEditor(sender, dataItem, isNew);
  }

  public removeHandler({ sender, dataItem, parent }: RemoveEvent): void {
    this.remove(this.getRowIndex(dataItem));
    // Publish the update to the remote service.
    if (parent) {
      // Reload the parent node to reflect the changes.
      sender.reload(parent);
    }
  }

  private closeEditor(treelist: TreeListComponent, dataItem: any = this.editedItem, isNew: boolean = false): void {
    treelist.closeRow(dataItem, isNew);
    this.editedItem = undefined;
  }
}
