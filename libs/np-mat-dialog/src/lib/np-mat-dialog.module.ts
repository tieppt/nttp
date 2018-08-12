import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BaseDialogComponent } from './base-dialog/base-dialog.component';
import { DialogService } from './dialog.service';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  declarations: [BaseDialogComponent],
  exports: [BaseDialogComponent],
  entryComponents: [BaseDialogComponent]
})
export class NpMatDialogModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NpMatDialogModule,
      providers: [DialogService]
    };
  }
}
