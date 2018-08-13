import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { BaseDialogComponent } from './base-dialog/base-dialog.component';
import { DialogOptions } from './dialog.model';

@Injectable()
export class DialogService {
  private readonly defaultOptions: MatDialogConfig = {
    minWidth: '80vw',
    maxWidth: '85vw',
    minHeight: '200px',
    maxHeight: '85vh'
  };
  constructor(private dialog: MatDialog) {}

  public open<T = any>(
    dialogOptions: DialogOptions,
    options: MatDialogConfig<T> = {}
  ): MatDialogRef<BaseDialogComponent> {
    options = Object.assign({}, this.defaultOptions, options);
    const dialogRef = this.dialog.open<BaseDialogComponent>(BaseDialogComponent, options);

    const component = dialogRef.componentInstance;
    Object.assign(component, dialogOptions);
    component.update(dialogOptions);
    return dialogRef;
  }
  // TODO: implement following methods
  public confirm() {}
  public info() {}
  public success() {}
  public error() {}
  public warning() {}
}
