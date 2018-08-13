import { Component } from '@angular/core';
import { DialogService } from '@nttp/np-mat-dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'np-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nttp';
  ref: MatDialogRef<any>;
  constructor(private dialogService: DialogService) {}

  openDialog(tmpl, actions) {
    const ref = this.dialogService.open({ content: tmpl, actions });
    ref.afterClosed().subscribe(r => console.log({ r }));
    this.ref = ref;
  }

  cancel() {
    this.ref.close('nope');
  }

  ok() {
    this.ref.close('okkk');
  }
}
