import { Component } from '@angular/core';
import { DialogService } from '@nttp/np-mat-dialog';

@Component({
  selector: 'np-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nttp';
  constructor(private dialogService: DialogService) {}

  openDialog() {
    const ref = this.dialogService.open('Message from AppComponent!');
    ref.afterClosed().subscribe(r => console.log({ r }));
  }
}
