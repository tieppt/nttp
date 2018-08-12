import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { BaseDialogComponent } from './base-dialog/base-dialog.component';

@Injectable()
export class DialogService {
  defaultOptions: MatDialogConfig = {
    minWidth: '80vw',
    maxWidth: '85vw',
    minHeight: '200px',
    maxHeight: '85vh'
  };
  constructor(private dialog: MatDialog) {}

  public open<T = any>(message: string, options: MatDialogConfig<T> = {}): MatDialogRef<BaseDialogComponent> {
    options = Object.assign(this.defaultOptions, options);
    const dialogRef = this.dialog.open<BaseDialogComponent>(BaseDialogComponent, options);

    const component = dialogRef.componentInstance;
    Object.assign(component, { message });

    return dialogRef;
  }
}
